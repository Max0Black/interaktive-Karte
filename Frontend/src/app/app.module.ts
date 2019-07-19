import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AbfrageBackend } from './abfragen/abfrageBackend';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EinstellungenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [ AbfrageBackend ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
