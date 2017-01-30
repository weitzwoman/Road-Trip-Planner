import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { masterGoogleMapsConfig } from '../api-keys';
declare var google: any;

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.css']
})

// @Directive({
//   selector: 'sebm-google-map-directions'
// })

export class MapMainComponent implements OnInit {
  title = 'Road Trip!';




  constructor() { }

  ngOnInit() {

  }

}
