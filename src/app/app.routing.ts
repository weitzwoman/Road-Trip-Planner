import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapMainComponent } from './map-main/map-main.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MapMainComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
