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
 *    ███╗   ███╗ ██████╗ ██████╗ ██╗   ██╗██╗     ███████╗
 *    ████╗ ████║██╔═══██╗██╔══██╗██║   ██║██║     ██╔════╝
 *    ██╔████╔██║██║   ██║██║  ██║██║   ██║██║     █████╗
 *    ██║╚██╔╝██║██║   ██║██║  ██║██║   ██║██║     ██╔══╝
 *    ██║ ╚═╝ ██║╚██████╔╝██████╔╝╚██████╔╝███████╗███████╗
 *    ╚═╝     ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
 *
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTripsComponent } from './components/list-trips/list-trips.component';

// IMPORT MODULES
const ANGULAR_FIRE_MODULES = [];
const ANGULAR_MATERIAL = [];
const KENDO_UI = [];

// MODULE DECLARATION
@NgModule({
  declarations: [ListTripsComponent],
  imports: [
    ...ANGULAR_FIRE_MODULES,
    ...ANGULAR_MATERIAL,
    ...KENDO_UI,
    CommonModule
  ],
  exports: [ListTripsComponent]
})
export class ListTripsModule { }
