import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
declare var google: any;

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.css']
})

export class MapMainComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

}
