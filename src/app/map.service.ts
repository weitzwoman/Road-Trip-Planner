import { Injectable } from '@angular/core';
import { Map } from './map.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Gas } from './gas.model';

@Injectable()
export class MapService {
  results: any;
  constructor(private http: Http) { }

  showMPG(lat, long) {

   return this.http.get("http://devapi.mygasfeed.com/stations/radius/45.677064/-122.551182/10/reg/price/rfej9napna.json?callback=?");


  }

}
