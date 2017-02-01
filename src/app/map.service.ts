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

    return this.http.get('https://ridb.recreation.gov/api/v1/facilities?latitude=' + lat  + '&longitude=' + long + '&limit=5&apikey=F682E4677D1E48E88F3062C39D598A67')
    .map(res => res.json())
    .subscribe(data => {

      console.log(data);
      this.results = data;
      let newCampgrounds = [];
      for(var i=0; i<this.results.RECDATA.length; i++){
        let campData = this.results.RECDATA[i];
        newCampgrounds.push(new Campground(
          campData.FacilityName ,
          campData.FacilityDescription,
          campData.FacilityDirections,
          campData.FacilityTypeDescription
        ));
      }
      this.campgrounds = newCampgrounds
      return this.campgrounds;
    });
  }

  grabParkInfo(info, typedIn) {
    return this.http.get("https://api.transitandtrails.org/api/v1/" + info + "/" + typedIn + "?key=5153c67394331f2c1adee0436cbb0376d625637caf6e03d8a57666039f8eddb1")
    .map(res => {
      return <any[]> res.json();
    });
  }
}
