import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule,
    MaterialModule,
    
  ],
  exports: [
    MDBBootstrapModule,
    MaterialModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
  ]
})
export class SharedModule { }
