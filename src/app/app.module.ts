import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MapMainComponent } from './map-main/map-main.component';
import { CampgroundComponent } from './campground/campground.component';
// import { masterGasApiConfig } from './api-keys';

@NgModule({
  declarations: [
    AppComponent,
    MapMainComponent,
    CampgroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    // AgmCoreModule.forRoot({
    //   apiKey: masterGoogleMapsConfig,
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
