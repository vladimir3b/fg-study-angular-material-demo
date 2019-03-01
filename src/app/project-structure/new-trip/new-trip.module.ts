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

// MY IMPORTS
import { NewTripComponent } from './components/new-trip/new-trip.component';

// IMPORT MODULES
const ANGULAR_FIRE_MODULES = [];
const ANGULAR_MATERIAL = [];
const KENDO_UI = [];

// MODULE DECLARATION
@NgModule({
  declarations: [ NewTripComponent ],
  imports: [
    ...ANGULAR_FIRE_MODULES,
    ...ANGULAR_MATERIAL,
    ...KENDO_UI,
    CommonModule
  ],
  exports: [ NewTripComponent ]
})
export class NewTripModule { }
