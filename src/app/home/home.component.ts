import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { MapService } from '../map.service';
import { Campground } from '../campground.model';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MapService]
})
export class HomeComponent implements OnInit {
  @Output() clickSender = new EventEmitter;
  campgrounds: Campground[] = [];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.campgrounds = this.mapService.getCampgrounds();
  }

  handleShowCampSender(coords) {
    this.showCamps(coords.lat, coords.long);
  }

  showCamps(lat, long) {
    this.mapService.loadCampgrounds(lat, long);
    setTimeout(() => this.campgrounds = this.mapService.getCampgrounds(), 1000)
  }

}
