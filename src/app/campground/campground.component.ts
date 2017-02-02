import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MapService } from '../map.service';
import { Campground } from '../campground.model';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { DomSanitizer, SafeResourceUrl, SafeHtml} from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';
// import $ from "@types/jquery";
declare var $:any;

@Component({
  selector: 'app-campground',
  templateUrl: './campground.component.html',
  styleUrls: ['./campground.component.css'],
  providers: [MapService]
})

export class CampgroundComponent implements OnInit {
  @Input() campgrounds: Campground[];
  @Output() showCampsSender = new EventEmitter();
  results;
  newCampground: Campground;


  constructor(private _sanitizer: DomSanitizer, private router: Router, private mapService: MapService) { }

  ngOnInit() {
  }

  private _htmlProperty: string = '<input type="text" name="name">';
    public get htmlProperty() : SafeHtml {
       return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    }

  showCamps(lat, long) {
    let coords = {lat: lat, long: long}
    this.showCampsSender.emit(coords);
  }

  fullSquare() {
    // var container: HTMLDivElement;
    // container.style.position = "absolute";
    // container.style.width = "100%";
    // container.style.height = "100%";
    // $(this).css({"color": "red"});
    $(".campgroundTile").click(function() {
      $(this).attr('id', 'submit');
      $(".campgroundTile").css({"display": "none"});
      $(this).css({"display": "flex"});
      $(this).addClass("fillItPlease");
      $(".contentBox").css({"display": "flex"});
      $(".middle").addClass("biggerMiddle");
      $(this).addClass("end");
      $(".end option").attr('id', 'end');
    });

    // $(".closeIt").click(function() {
    //   $(".campgroundTile").removeClass("fillItPlease");
    // });
    $(".fillItPlease").dblclick(function() {
      $(".campgroundTile").css({"display": "flex"});
      $(".campgroundTile .contentBox").css({"display": "none"});
      $(".campgroundTile").removeClass("fillItPlease");
      $(".biggerMiddle").removeClass("biggerMiddle");
      $(".campgroundTile option").attr('id', '');
      $(".end").removeClass("end");
      $(".campgroundTile").attr('id', '');
    });
  }

}
