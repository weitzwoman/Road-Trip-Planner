import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { MapService } from '../map.service';
import { Campground } from '../campground.model';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { DomSanitizer, SafeResourceUrl, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MapService]
})
export class HomeComponent implements OnInit {
  @Output() clickSender = new EventEmitter;
  campgrounds: Campground[] = [];

  constructor(private _sanitizer: DomSanitizer, private router: Router, private mapService: MapService) { }

  ngOnInit() {
    this.campgrounds = this.mapService.getCampgrounds();
  }

  private _htmlProperty: string = '<input type="text" name="name">';

    public get htmlProperty() : SafeHtml {
       return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    }



  handleShowCampSender(coords) {
    this.showCamps(coords.lat, coords.long);
  }

  showCamps(lat, long) {
    this.mapService.loadCampgrounds(lat, long);
    setTimeout(() => this.campgrounds = this.mapService.getCampgrounds(), 1000)
  }

}
