/***
 *    ██████╗  ██████╗  ██████╗ ████████╗
 *    ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝
 *    ██████╔╝██║   ██║██║   ██║   ██║
 *    ██╔══██╗██║   ██║██║   ██║   ██║
 *    ██║  ██║╚██████╔╝╚██████╔╝   ██║
 *    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝
 *
 *    ███╗   ███╗ ██████╗ ██████╗ ██╗   ██╗██╗     ███████╗
 *    ████╗ ████║██╔═══██╗██╔══██╗██║   ██║██║     ██╔════╝
 *    ██╔████╔██║██║   ██║██║  ██║██║   ██║██║     █████╗
 *    ██║╚██╔╝██║██║   ██║██║  ██║██║   ██║██║     ██╔══╝
 *    ██║ ╚═╝ ██║╚██████╔╝██████╔╝╚██████╔╝███████╗███████╗
 *    ╚═╝     ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
 *
 */
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

// MY IMPORTS
import { environment } from '../../../environments/environment';
import { HomeModule } from '../home/home.module';
import { ListTripsModule } from '../list-trips/list-trips.module';
import { NewTripModule } from '../new-trip/new-trip.module';
import { RootComponent } from './components/root/root.component';
import { RootRouting } from './root.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// IMPORT MODULES
const ANGULAR_FIRE_MODULES = [
  AngularFireDatabaseModule,
  AngularFireModule.initializeApp(environment.firebase),
];
const ANGULAR_MATERIAL = [
  MatToolbarModule
];
const KENDO_UI = [];

// MODULE DECLARATION
@NgModule({
  declarations: [
    RootComponent,
    NotFoundComponent,
    NavigationComponent
  ],
  imports: [
    ...ANGULAR_FIRE_MODULES,
    ...ANGULAR_MATERIAL,
    ...KENDO_UI,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HomeModule,
    ListTripsModule,
    NewTripModule,
    RootRouting
  ],
  providers: [ ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
