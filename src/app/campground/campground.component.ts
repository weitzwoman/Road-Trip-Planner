import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-campground',
  templateUrl: './campground.component.html',
  styleUrls: ['./campground.component.css'],
  providers: [MapService]
})
export class CampgroundComponent implements OnInit {
  result;
  campgrounds;
  filler;
  newResults;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    // this.mapService.grabParkInfo(this.filler).subscribe(x => {
    //   this.result = x;
    //   this.campgrounds = this.result.campgrounds;
    //   console.log(this.result);
    // });
  }

  grabParkInfoStart(typeSelected, inputtedInfo) {
  this.mapService.grabParkInfo(typeSelected, inputtedInfo).subscribe(x => {
      this.result = x;
      this.campgrounds = this.result.campgrounds;
      console.log(this.result);
    });
  }


}
