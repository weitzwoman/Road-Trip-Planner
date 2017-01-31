import { Injectable } from '@angular/core';
import { Map } from './map.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Gas } from './gas.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MapService {
  private gasUrl = 'http://devapi.mygasfeed.com/stations/radius/45.677064/-122.551182/1/reg/price/rfej9napna.json?callback=';

  constructor(private http: Http) { }

  showMPG(lat, long) {
    return this.http.get(this.gasUrl)
    .map(res => {
      console.log(res.json());
      return <any[]> res.json();
    });
  }
}
