import { Injectable } from '@angular/core';
import { Map } from './map.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MapService {
  results: any;
  parkResults: any;
  constructor(private http: Http) { }

  showMPG(lat, long) {
    this.results = this.http.get("http://devapi.mygasfeed.com/stations/radius/45.677064/-122.551182/10/reg/price/rfej9napna.json?callback=?"
    );
  }

  grabParkInfo(info, typedIn) {
    return this.http.get("https://api.transitandtrails.org/api/v1/" + info + "/" + typedIn + "?key=5153c67394331f2c1adee0436cbb0376d625637caf6e03d8a57666039f8eddb1")
    .map(res => {
      return <any[]> res.json();
    });

    }


}
