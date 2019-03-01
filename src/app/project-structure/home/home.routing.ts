/***
 *    ██╗  ██╗ ██████╗ ███╗   ███╗███████╗
 *    ██║  ██║██╔═══██╗████╗ ████║██╔════╝
 *    ███████║██║   ██║██╔████╔██║█████╗
 *    ██╔══██║██║   ██║██║╚██╔╝██║██╔══╝
 *    ██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
 *    ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
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
import { HomeComponent } from './../home/components/home/home.component';

// DEFINE ROUTES
const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];

// MODULE DECLARATION
@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class HomeRouting { }
