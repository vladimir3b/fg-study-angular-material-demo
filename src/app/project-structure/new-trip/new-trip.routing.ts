/***
 *    ███╗   ██╗███████╗██╗    ██╗
 *    ████╗  ██║██╔════╝██║    ██║
 *    ██╔██╗ ██║█████╗  ██║ █╗ ██║
 *    ██║╚██╗██║██╔══╝  ██║███╗██║
 *    ██║ ╚████║███████╗╚███╔███╔╝
 *    ╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝
 *
 *    ████████╗██████╗ ██╗██████╗
 *    ╚══██╔══╝██╔══██╗██║██╔══██╗
 *       ██║   ██████╔╝██║██████╔╝
 *       ██║   ██╔══██╗██║██╔═══╝
 *       ██║   ██║  ██║██║██║
 *       ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝
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
import { NewTripComponent } from './components/new-trip/new-trip.component';


// DEFINE ROUTES
const ROUTES: Routes = [
  {
    path: 'new-trip',
    component: NewTripComponent
  }
];

// MODULE DECLARATION
@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class NewTripRouting { }
