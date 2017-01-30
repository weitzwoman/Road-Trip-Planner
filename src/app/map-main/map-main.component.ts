import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.css']
})
export class MapMainComponent implements OnInit {
  title = 'Road Trip!';
  lat: number = 45.798378;
  lng: number = -108.630241;

  constructor() { }

  ngOnInit() {
  }

}
