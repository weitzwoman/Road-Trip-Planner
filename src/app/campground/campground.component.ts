import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { MapService } from '../map.service';
import { Campground } from '../campground.model';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { DomSanitizer, SafeResourceUrl, SafeHtml} from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-campground',
  templateUrl: './campground.component.html',
  styleUrls: ['./campground.component.css'],
  providers: [MapService]
})

export class CampgroundComponent implements OnInit {
  @Input() campgrounds: Campground[];
  @Output() showCampsSender = new EventEmitter();
  results;
  newCampground: Campground;

  constructor(private _sanitizer: DomSanitizer, private router: Router, private mapService: MapService) { }

  ngOnInit() {
  }

  private _htmlProperty: string = '<input type="text" name="name">';
    public get htmlProperty() : SafeHtml {
       return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    }

  showCamps(lat, long) {
    let coords = {lat: lat, long: long}
    this.showCampsSender.emit(coords);
  }

}
