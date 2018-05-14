import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { 
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatMenuModule,
  MatDialogModule,
  MatTabsModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatDatepickerModule
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
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class MaterialModule { }
