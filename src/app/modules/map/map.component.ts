import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });
  }

  tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(this.map);

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}

  /**
   *  this section opens a nodejs leflet project hosted on S3
   *  moved from chart.component.ts
   * 
   
   import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
// import * as data from '../../../assets/data/providence_streetlight_data.json';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  url = "http://leaflet-geojson-app-stage1.s3-website-us-east-1.amazonaws.com";

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    // console.log(data)
    // window.location.href = '';
    // this.goToUrl();
  }

  goToUrl(): void {
    // this.document.location.href = '"http://leaflet-geojson-app-stage1.s3-website-us-east-1.amazonaws.com/" target="visualization"';
    // window.open("http://leaflet-geojson-app-stage1.s3-website-us-east-1.amazonaws.com", 'leaflet_heat_map', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=400,height=350');
    window.open(this.url, 'leaflet_heat_map', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=1024,height=768');
    // this.document.location.href = "/";
  }

}

   */
