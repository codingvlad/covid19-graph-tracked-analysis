import { Component, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material';
import { Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import * as L from 'leaflet';
import * as d3 from 'd3';
import { GraphService } from 'src/app/services/graph.service';

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

  constructor(
    private dataService: DataService,
    private graphService: GraphService,
    private userFeedback: MatSnackBar) { }

  ngAfterViewInit() {
    this.loadPostalCodeData().then(data => {
      const randomPostalCodesToHighlight = this.graphService.initGraph(data);
      this.initMap(data, randomPostalCodesToHighlight);
    })
    this.userFeedback.openFromComponent(UserActionFeedbackComponent, {
      duration: 7000,
      data: "This tool display FAKE DATA for demo purposes!!!"
    });
  }

  private loadPostalCodeData = () => d3.json('assets/data/plz-5stellig.geojson')

  private initMap(data: any, randomPostalCodesToHighlight: Array<string>): void {
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
    const svg = overlay.select('svg').attr('pointer-events', 'auto')
    // create a group that is hidden during zooming
    const g = svg.append('g').attr('class', 'leaflet-zoom-hide')

    const _map = this.map;
    // Use Leaflets projection API for drawing svg path (creates a stream of projected points)
    const projectPoint = function (x, y) {
      const point = _map.latLngToLayerPoint(new L.LatLng(y, x))
      this.stream.point(point.x, point.y)
    }

    // Use d3's custom geo transform method to implement the above
    const projection = d3.geoTransform({ point: projectPoint })
    // creates geopath from projected points (SVG)
    const pathCreator = d3.geoPath().projection(projection)

    const color = d3.scaleLinear<string>().domain([1, 5])
      .range(["yellow", "red"]);

    const colorOfRandomPostalCodes = (feature: any) => {
      if (randomPostalCodesToHighlight.includes(feature.properties.plz)) {
        const postalCodeConnectivity = Math.floor(Math.random() * 5) + 1
        return color(postalCodeConnectivity);
      }
      else {
        return 'green';
      }
    }

    //const mapping: Array<PostalCodeMapInfo> = data.features.map(feature => this.extractPostalCodeInfo(feature));
    const areaPaths = g.selectAll('path')
      .data(data.features)
      .join('path')
      .attr('fill-opacity', 0.3)
      .attr('fill', colorOfRandomPostalCodes)
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
    const onZoom = () => areaPaths.attr('d', pathCreator);
    // initialize positioning
    onZoom();
    // reset whenever map is moved
    this.map.on('zoomend', onZoom);
  }



  private extractPostalCodeInfo(geoJsonFeature: any): PostalCodeMapInfo {
    const coordinates = new Array<Array<MapCoordinates>>();
    geoJsonFeature.geometry.coordinates.forEach(polygon => {
      const polygonCoordinates = new Array<MapCoordinates>();
      polygon.forEach(entry => {
        polygonCoordinates.push({
          lat: entry[0],
          long: entry[1]
        });
      });
      coordinates.push(polygonCoordinates);
    })

    return {
      name: geoJsonFeature.properties.plz,
      coordinates: coordinates
    }
  }

  private loadPostalCodes(): void {
    d3.json('assets/data/plz-5stellig.geojson').then((data: any) => {
      const mapping: Array<PostalCodeMapInfo> = data.features.map(feature => this.extractPostalCodeInfo(feature));
      //console.log(mapping);
    })
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


