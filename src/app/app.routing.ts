import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapMainComponent } from './map-main/map-main.component';
import { CampgroundComponent } from './campground/campground.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MapMainComponent
  },
  {
    path: 'campground',
    component: CampgroundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
