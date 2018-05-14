import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PagesTableComponent } from '../../tables/pages-table/pages-table.component';
import { CodesTableComponent } from '../../tables/codes-table/codes-table.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-reference',
  templateUrl: './create-reference.component.html',
  styleUrls: ['./create-reference.component.scss']
})
export class CreateReferenceComponent implements OnInit {

  constructor(
    private _location: Location,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
  }

  onAddPagesClick(): boolean {
    let dialogRef = this.dialog.open(PagesTableComponent, {
      width: '70%'
    });
    return false
  }

  onAddCodesClick(): boolean {
    let dialogRef = this.dialog.open(CodesTableComponent, {
      width: '70%'
    });
    return false
  }

}
