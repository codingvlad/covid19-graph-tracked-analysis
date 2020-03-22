import { Component, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material';
import { Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import * as L from 'leaflet';
import * as d3 from 'd3';
import { GraphService } from 'src/app/services/graph.service';
import { ArrayDataSource } from '@angular/cdk/collections';

export interface PostalCodeMapInfo {
  name: string;
  coordinates: Array<Array<MapCoordinates>>;
}

export interface MapCoordinates {
  long: number;
  lat: number;
}

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  map: any;
  munichLatLng = L.latLng(48.1351, 11.5820);
  postalCodeData: any;
  mapSvg: any;
  postalCodesSVGGroup: any;

  constructor(
    private dataService: DataService,
    private graphService: GraphService,
    private userFeedback: MatSnackBar) { }

  ngAfterViewInit() {
    this.loadPostalCodeData().then(data => {
      const randomPostalCodesToHighlight = this.graphService.initGraph(data);
      this.initMap();
      this.drawPostalCodes(data, randomPostalCodesToHighlight);
      this.loadPostalCodeCentroidData().then(dataCentroids => {
        this.drawPostalCodesCentroids(dataCentroids, randomPostalCodesToHighlight);
        this.drawGraphEdges(dataCentroids, randomPostalCodesToHighlight);
      })
    })

    this.userFeedback.openFromComponent(UserActionFeedbackComponent, {
      duration: 5000,
      data: "This tool displays FAKE DATA for demo purposes!!!"
    });
  }

  private loadPostalCodeData = () => d3.json('assets/data/plz-5stellig.geojson')

  private loadPostalCodeCentroidData = () => d3.json('assets/data/plz-5stellig-centroid.geojson')

  private initMap(): void {
    this.map = L.map('mapView', {
      center: this.munichLatLng,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 14,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    //initialize svg to add to map
    L.svg({ clickable: true }).addTo(this.map) // we have to make the svg layer clickable 

    //Create selection using D3
    const overlay = d3.select(this.map.getPanes().overlayPane)
    this.mapSvg = overlay.select('svg').attr('pointer-events', 'auto')
    // create a group that is hidden during zooming
    this.postalCodesSVGGroup = this.mapSvg.append('g').attr('class', 'leaflet-zoom-hide')

  }

  // Use Leaflets projection API for drawing svg path (creates a stream of projected points)
  private projectPoint = (map: any) => function (x, y) {
    const point = map.latLngToLayerPoint(new L.LatLng(y, x))
    this.stream.point(point.x, point.y)
  }

  // Use d3's custom geo transform method to implement the above
  private projection = (map: any) => d3.geoTransform({ point: this.projectPoint(map) })

  // creates geopath from projected points (SVG)
  private pathCreator = () => d3.geoPath().projection(this.projection(this.map))

  // generate colors between yellow and red 
  private dangerLevelColorGenerator = d3.scaleLinear<string>().domain([1, 5])
    .range(["yellow", "red"]);

  private colorOfRandomPostalCodes = (feature: any, randomPostalCodesToHighlight: Array<string>) => {
    if (randomPostalCodesToHighlight.includes(feature.properties.plz)) {
      const postalCodeConnectivity = Math.floor(Math.random() * 5) + 1
      return this.dangerLevelColorGenerator(postalCodeConnectivity);
    }
    else {
      return 'green';
    }
  }

  private drawPostalCodes(data: any, postalCodes: Array<string>) {
    //const mapping: Array<PostalCodeMapInfo> = data.features.map(feature => this.extractPostalCodeInfo(feature));
    
    const areadSVGGroup = this.postalCodesSVGGroup.append('g')
    
    const areaPaths = areadSVGGroup.selectAll('path')
      .data(data.features)
      .join('path')
      .attr('fill-opacity', 0.3)
      .attr('fill', (d) => this.colorOfRandomPostalCodes(d, postalCodes))
      .attr('stroke', 'black')
      .style('stroke-dasharray', '5, 5')
      .attr('z-index', 3000)
      .attr('stroke-width', 1)
      .on('mouseover', (_, i, g) => {
        d3.select(g[i])
          .attr('fill-opacity', 0.5)
      })
      .on('mouseout', (_, i, g) => {
        d3.select(g[i])
          .attr('fill-opacity', 0.3)
      })
      ;

    // Function to place svg based on zoom
    const onZoom = () => areaPaths.attr('d', this.pathCreator());
    // initialize positioning
    onZoom();
    // reset whenever map is moved
    this.map.on('zoomend', onZoom);
  }

  calculatePoint = (d: any) => {
    return "translate(" +
      this.map.latLngToLayerPoint(d.LatLng).x + "," +
      this.map.latLngToLayerPoint(d.LatLng).y + ")";
  }


  private drawPostalCodesCentroids(data: any, postalCodes: Array<string>) {
    /* Add a LatLng object to each item in the dataset */
    const pickedPostalCodes = [];
    data.features.forEach(f => {
      if (postalCodes.includes(f.properties.plz.toString())) {
        pickedPostalCodes.push(f);
      }
    })

    const g = this.postalCodesSVGGroup.append('g')

    const centroids = g.selectAll('circle')
      .attr("class", "po-centroid")
      .data(pickedPostalCodes)
      .join('circle')
      .attr("id", (d) => "postalCodeCentroid" + d.properties.plz)
      .attr("fill", "red")
      .attr("stroke", "darkred")
      //Leaflet has to take control of projecting points. Here we are feeding the latitude and longitude coordinates to
      //leaflet so that it can project them on the coordinates of the view. Notice, we have to reverse lat and lon.
      //Finally, the returned conversion produces an x and y point. We have to select the the desired one using .x or .y
      .attr("cx", d => this.map.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).x)
      .attr("cy", d => this.map.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).y)
      .attr("r", 5)
      .on('mouseover', function () { //function to add mouseover event
        d3.select(this).transition() //D3 selects the object we have moused over in order to perform operations on it
          .duration(150) //how long we are transitioning between the two states (works like keyframes)
          .attr("fill", "red") //change the fill
          .attr('r', 10) //change radius
      })
      .on('mouseout', function () { //reverse the action based on when we mouse off the the circle
        d3.select(this).transition()
          .duration(150)
          .attr("fill", "steelblue")
          .attr('r', 5)
      });


    const update = () => centroids
      .attr("cx", d => this.map.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).x)
      .attr("cy", d => this.map.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).y)


    this.map.on("zoomend", update)
  }

  windowScan(origin: any, neighbours: any[]): any[] {
    const randomNeighbours = this.graphService.shuffle(neighbours)
    return randomNeighbours.map(neighbour => {
      return { origin: origin, endpoint: neighbour };
    })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private drawGraphEdges(data: any, postalCodes: Array<string>) {
    /* Add a LatLng object to each item in the dataset */
    const pickedPostalCodes = [];
    data.features.forEach(f => {
      if (postalCodes.includes(f.properties.plz.toString())) {
        pickedPostalCodes.push(f);
      }
    })

    const orderedPickedPostalCodes = pickedPostalCodes.sort((p1, p2) => (p1.properties.plz > p2.properties.plz) ? 1 : -1)
    const edges = []

    orderedPickedPostalCodes.forEach((affectedPostalCode, index, restOfPostalCodes) => {
      const affetctedEdges = this.windowScan(affectedPostalCode, restOfPostalCodes.slice(index - this.getRandomInt(2), index + this.getRandomInt(5)))
      affetctedEdges.forEach(edge => edges.push(edge))
    })


    const g = this.postalCodesSVGGroup.append('g')

    const edgesSVG = g.selectAll('line')
      .data(edges)
      .enter()
      .append('line')
      .attr("class", "graph-edge")
      .attr("stroke", "darkred")
      .attr("stroke-width", 2)
      .attr("x1", (d) => this.map.latLngToLayerPoint([d.origin.geometry.coordinates[1], d.origin.geometry.coordinates[0]]).x)
      .attr("y1", (d) => this.map.latLngToLayerPoint([d.origin.geometry.coordinates[1], d.origin.geometry.coordinates[0]]).y)
      .attr("x2", (d) => this.map.latLngToLayerPoint([d.endpoint.geometry.coordinates[1], d.endpoint.geometry.coordinates[0]]).x)
      .attr("y2", (d) => this.map.latLngToLayerPoint([d.endpoint.geometry.coordinates[1], d.endpoint.geometry.coordinates[0]]).y)
/*       .on('mouseover', function () { //function to add mouseover event
        d3.select(this).transition() //D3 selects the object we have moused over in order to perform operations on it
          .duration('150') //how long we are transitioning between the two states (works like keyframes)
          .attr("fill", "red") //change the fill
      })
      .on('mouseout', function () { //reverse the action based on when we mouse off the the circle
        d3.select(this).transition()
          .duration('150')
          .attr("fill", "steelblue")
      }); */


    const update = () => edgesSVG
      .attr("x1", (d) => this.map.latLngToLayerPoint([d.origin.geometry.coordinates[1], d.origin.geometry.coordinates[0]]).x)
      .attr("y1", (d) => this.map.latLngToLayerPoint([d.origin.geometry.coordinates[1], d.origin.geometry.coordinates[0]]).y)
      .attr("x2", (d) => this.map.latLngToLayerPoint([d.endpoint.geometry.coordinates[1], d.endpoint.geometry.coordinates[0]]).x)
      .attr("y2", (d) => this.map.latLngToLayerPoint([d.endpoint.geometry.coordinates[1], d.endpoint.geometry.coordinates[0]]).y)
    
    update()

    this.map.on("zoomend", update)
  }


  sayHi(): void {
    this.dataService.sayHello().subscribe(response => {
      console.log(response)
      this.userFeedback.openFromComponent(UserActionFeedbackComponent, {
        duration: 5000,
        data: response
      });
    });
  }
}




@Component({
  selector: 'user-action-feedback',
  templateUrl: './user-action-feedback.html',
  styles: [`
    .user-action-feedback {
      color: #4797CE;
    }
  `],
})
export class UserActionFeedbackComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}


