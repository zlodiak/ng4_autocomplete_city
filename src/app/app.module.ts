import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {  MatButtonModule,
          MatSidenavModule,
          MatAutocompleteModule,
          MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { ListComponent } from './list/list.component';
import { PlacesService } from './services/places.service';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    ListComponent
  ],
  imports: [
    HttpModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
