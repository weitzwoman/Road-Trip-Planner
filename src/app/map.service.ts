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
  private gasUrl = 'https://ridb.recreation.gov/api/v1/facilities?latitude=43.6820289&longitude=-102.9425011&limit=5&apikey=F682E4677D1E48E88F3062C39D598A67';
  campgrounds: Campground[] = [];

  constructor(private http: Http) { }

  getCampgrounds() {
    return this.campgrounds;
  }

  addCampground(newCampgroundItem) {
    console.log("hi " + this.campgrounds);
    this.campgrounds.push(newCampgroundItem);
  }

  showCampgrounds(lat, long) {
    return this.http.get(this.gasUrl)
    .map(res => {
        console.log("service" + res.json().RECDATA[0].FacilityDescription);
      return <any[]> res.json();
    });
  }

  grabParkInfo(info, typedIn) {
    return this.http.get("https://api.transitandtrails.org/api/v1/" + info + "/" + typedIn + "?key=5153c67394331f2c1adee0436cbb0376d625637caf6e03d8a57666039f8eddb1")
    .map(res => {
      return <any[]> res.json();
    });
  }
}
