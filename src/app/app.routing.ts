import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapMainComponent } from './map-main/map-main.component';
import { GasfeedComponent } from './gasfeed/gasfeed.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MapMainComponent
  },
  {
    path: 'gasfeed',
    component: GasfeedComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
