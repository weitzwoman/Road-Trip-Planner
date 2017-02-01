import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { MapService } from '../map.service';
import { Campground } from '../campground.model';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { DomSanitizer, SafeResourceUrl, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-campground',
  templateUrl: './campground.component.html',
  styleUrls: ['./campground.component.css'],
  providers: [MapService]
})
export class CampgroundComponent implements OnInit {
 results;
 newCampground: Campground;
 campgrounds: Campground[];

  constructor(private _sanitizer: DomSanitizer, private router: Router, private mapService: MapService) { }

  ngOnInit() {
    this.campgrounds = this.mapService.getCampgrounds();
  }

  private _htmlProperty: string = '<input type="text" name="name">';

    public get htmlProperty() : SafeHtml {
       return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    }





  showCamps(lat, long) {
    this.results = this.mapService.showCampgrounds(lat, long).subscribe(data => {
      this.results = data;
      for(var i=0; i<this.results.RECDATA.length; i++){
        var newCampground: Campground = new Campground(this.results.RECDATA[i].FacilityName , this.results.RECDATA[i].FacilityDescription, this.results.RECDATA[i].FacilityDirections, this.results.RECDATA[i].FacilityTypeDescription);
        console.log( "in object " + newCampground.facilityDescription);
        this.mapService.addCampground(newCampground);
      }
        // this.newCampground.facilityName = this.results.RECDATA[0].FacilityName;
        // this.newCampground.facilityDescription = this.results.RECDATA[0].FacilityDescription;
        // this.newCampground.facilityDirections = this.results.RECDATA[0].FacilityDirections;
        // this.newCampground.facilityTypeDescription = this.results.RECDATA[0].facilityTypeDescription;

    });
  }

}
