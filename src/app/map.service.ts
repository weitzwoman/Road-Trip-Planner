import { Injectable } from '@angular/core';
import { Map } from './map.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Gas } from './gas.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MapService {
  private gasUrl = 'https://ridb.recreation.gov/api/v1/facilities?latitude=43.6820289&longitude=-102.9425011&limit=1&apikey=F682E4677D1E48E88F3062C39D598A67';

  constructor(private http: Http) { }

  showMPG(lat, long) {
    return this.http.get(this.gasUrl)
    .map(res => {

        console.log(res.json().RECDATA[0].FacilityName);
      return <any[]> res.json();
    });
  }
}
