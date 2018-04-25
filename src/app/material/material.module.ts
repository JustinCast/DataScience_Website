import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatToolbarModule,

  
 } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,

  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,

  ]
})
export class MaterialModule { }
