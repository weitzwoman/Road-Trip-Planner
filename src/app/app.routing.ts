import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapMainComponent } from './map-main/map-main.component';
import { GasfeedComponent } from './gasfeed/gasfeed.component';
import { CampgroundComponent } from './campground/campground.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'map-main',
    component: MapMainComponent
  },
  {
    path: 'gasfeed',
    component: GasfeedComponent
  },
  {
    path: 'campground',
    component: CampgroundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
