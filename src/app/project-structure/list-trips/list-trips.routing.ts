/***
 *    ██╗     ██╗███████╗████████╗
 *    ██║     ██║██╔════╝╚══██╔══╝
 *    ██║     ██║███████╗   ██║
 *    ██║     ██║╚════██║   ██║
 *    ███████╗██║███████║   ██║
 *    ╚══════╝╚═╝╚══════╝   ╚═╝
 *
 *    ████████╗██████╗ ██╗██████╗ ███████╗
 *    ╚══██╔══╝██╔══██╗██║██╔══██╗██╔════╝
 *       ██║   ██████╔╝██║██████╔╝███████╗
 *       ██║   ██╔══██╗██║██╔═══╝ ╚════██║
 *       ██║   ██║  ██║██║██║     ███████║
 *       ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝     ╚══════╝
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
import { ListTripsComponent } from './components/list-trips/list-trips.component';

// DEFINE ROUTES
const ROUTES: Routes = [
  {
    path: 'list-trips',
    component: ListTripsComponent
  }
];

// MODULE DECLARATION
@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class ListTripsRouting { }
