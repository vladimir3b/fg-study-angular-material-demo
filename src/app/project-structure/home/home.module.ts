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
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

// MY IMPORTS
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material';

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
    CommonModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
