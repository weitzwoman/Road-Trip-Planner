import { Injectable } from '@angular/core';
import { Map } from './map.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Campground } from './campground.model';
import { CAMPGROUNDS } from './mock-campgrounds';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MapService {
  results: any;
  parkResults: any;
  campgrounds: Campground[] = [];

  constructor(private http: Http) { }

  getCampgrounds() {
    return this.campgrounds;
  }

  loadCampgrounds(lat, long) {

    return this.http.get('https://ridb.recreation.gov/api/v1/facilities?latitude=' + lat  + '&longitude=' + long + '&limit=10&apikey=F682E4677D1E48E88F3062C39D598A67')
    .map(res => res.json())
    .subscribe(data => {
      this.results = data;
      let newCampgrounds = [];
      for(var i=0; i<this.results.RECDATA.length; i++){
        let campData = this.results.RECDATA[i];
        newCampgrounds.push(new Campground(
          campData.FacilityName ,
          campData.FacilityDescription,
          campData.FacilityDirections,
          campData.FacilityTypeDescription,
          campData.FacilityLatitude,
          campData.FacilityLongitude,
        ));
      }
      this.campgrounds = newCampgrounds
      return this.campgrounds;
    });
  }
}
