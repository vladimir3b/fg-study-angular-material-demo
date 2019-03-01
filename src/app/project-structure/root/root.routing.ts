/***
 *    ██████╗  ██████╗  ██████╗ ████████╗
 *    ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝
 *    ██████╔╝██║   ██║██║   ██║   ██║
 *    ██╔══██╗██║   ██║██║   ██║   ██║
 *    ██║  ██║╚██████╔╝╚██████╔╝   ██║
 *    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝
 *
 *    ██████╗  ██████╗ ██╗   ██╗████████╗██╗███╗   ██╗ ██████╗
 *    ██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝██║████╗  ██║██╔════╝
 *    ██████╔╝██║   ██║██║   ██║   ██║   ██║██╔██╗ ██║██║  ███╗
 *    ██╔══██╗██║   ██║██║   ██║   ██║   ██║██║╚██╗██║██║   ██║
 *    ██║  ██║╚██████╔╝╚██████╔╝   ██║   ██║██║ ╚████║╚██████╔╝
 *    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝
 *
 */
import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

// MY IMPORTS
import { HomeRouting } from './../home/home.routing';
import { ListTripsRouting } from './../list-trips/list-trips.routing';
import { NewTripRouting } from '../new-trip/new-trip.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';

// DEFINE ROUTES
const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
];

// MODULE DECLARATION
@NgModule({
  imports: [
    HomeRouting,
    ListTripsRouting,
    NewTripRouting,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class RootRouting { }
