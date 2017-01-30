import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { masterGoogleMapsConfig} from './api-keys';

import { AppComponent } from './app.component';

export const googleMapsConfig = {
  apiKey: masterGoogleMapsConfig
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: masterGoogleMapsConfig
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
