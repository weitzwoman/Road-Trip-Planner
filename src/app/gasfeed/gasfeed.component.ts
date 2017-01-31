import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { MapService } from '../map.service';

@Component({
  selector: 'app-gasfeed',
  templateUrl: './gasfeed.component.html',
  styleUrls: ['./gasfeed.component.css'],
  providers: [MapService]
})
export class GasfeedComponent implements OnInit {

  constructor(private mapService: MapService) { }
   result = this.mapService.results;
  ngOnInit() {
    console.log(this.result);
  }

  getMPG(lat, long) {
    this.mapService.showMPG(lat, long);
  }

}
