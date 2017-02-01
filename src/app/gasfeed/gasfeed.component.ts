import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { MapService } from '../map.service';
import { Gas } from '../gas.model';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-gasfeed',
  templateUrl: './gasfeed.component.html',
  styleUrls: ['./gasfeed.component.css'],
  providers: [MapService]
})
export class GasfeedComponent implements OnInit {
 results;
 newGas: Gas;

  constructor(private mapService: MapService) { }

  ngOnInit() {

  }

  getMPG(lat, long) {
    this.results = this.mapService.showMPG(lat, long).subscribe(data => {
      this.results = data;
      for(var i=0; i<data.length; i++) {
        this.newGas.facilityName = this.results.RECDATA[0].FacilityName;
        this.newGas.facilityDescription = this.results.RECDATA[0].FacilityDescription;
        this.newGas.facilityDirections = this.results.RECDATA[0].FacilityDirections;
        this.newGas.facilityTypeDescription = this.results.RECDATA[0].facilityTypeDescription;
        console.log(this.newGas.facilityName);
      };
    });
  }

}
