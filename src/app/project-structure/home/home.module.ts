/***
 *    ██╗  ██╗ ██████╗ ███╗   ███╗███████╗
 *    ██║  ██║██╔═══██╗████╗ ████║██╔════╝
 *    ███████║██║   ██║██╔████╔██║█████╗
 *    ██╔══██║██║   ██║██║╚██╔╝██║██╔══╝
 *    ██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
 *    ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
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
import { HomeComponent } from './components/home/home.component';

// IMPORT MODULES
const ANGULAR_FIRE_MODULES = [];
const ANGULAR_MATERIAL = [];
const KENDO_UI = [];

// MODULE DECLARATION
@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    ...ANGULAR_FIRE_MODULES,
    ...ANGULAR_MATERIAL,
    ...KENDO_UI,
    CommonModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
