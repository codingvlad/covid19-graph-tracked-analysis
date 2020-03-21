import { Component, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material';
import { Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import * as L from 'leaflet';
import * as d3 from 'd3';

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

  constructor(private dataService: DataService, private userFeedback: MatSnackBar) { }

  ngAfterViewInit() {
    this.initMap();
    this.loadPostalCodes();
  }

  private initMap(): void {
    this.map = L.map('mapView', {
      center: [48.1351, 11.5820],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
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
    d3.json("assets/data/plz-5stellig.geojson").then((data: any) => {
      const mapping: Array<PostalCodeMapInfo> = data.features.map(feature => this.extractPostalCodeInfo(feature));
      console.log(mapping);
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


