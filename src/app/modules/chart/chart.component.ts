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
    this.goToUrl();
  }

  goToUrl(): void {
    // this.document.location.href = 'http://leaflet-geojson-app-stage1.s3-website-us-east-1.amazonaws.com/';
    // window.open("http://leaflet-geojson-app-stage1.s3-website-us-east-1.amazonaws.com", 'leaflet_heat_map', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=400,height=350');
    window.open(this.url, 'leaflet_heat_map', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=1024,height=768');
    // this.document.location.href = "/";
  }

}
