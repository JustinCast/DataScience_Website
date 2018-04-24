import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.routing';
import { ProjectsModule } from './projects/projects.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    ProjectsModule
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
