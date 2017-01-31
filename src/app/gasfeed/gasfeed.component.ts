import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { MapService } from '../map.service';
import { Gas } from '../gas.model';

@Component({
  selector: 'app-gasfeed',
  templateUrl: './gasfeed.component.html',
  styleUrls: ['./gasfeed.component.css'],
  providers: [MapService]
})
export class GasfeedComponent implements OnInit {
 results;
  constructor(private mapService: MapService) { }

  ngOnInit() {

  }

  getMPG(lat, long) {
    this.results = this.mapService.showMPG(lat, long).subscribe(data=>{
      console.log(data);

    });
  }

}
