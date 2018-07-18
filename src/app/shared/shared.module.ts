import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from '../material/material.module';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MDBBootstrapModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
  ConfirmComponent]
})
export class SharedModule { }
