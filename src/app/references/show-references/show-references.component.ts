import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { CreateReferenceComponent } from '../create-reference/create-reference.component';
import { ModifyReferenceComponent } from '../modify-reference/modify-reference.component';
import { DetailsReferenceComponent } from '../details-reference/details-reference.component';
import { PagesTableComponent } from '../../tables/pages-table/pages-table.component';
import { CodesTableComponent } from '../../tables/codes-table/codes-table.component';



@Component({
  selector: 'app-show-references',
  templateUrl: './show-references.component.html',
  styleUrls: ['./show-references.component.scss']
})
export class ShowReferencesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialogDeleteReference(): void {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      width: '30%',
    });
  }

  openDialogModifyReference(): void {
    let dialogRef = this.dialog.open(ModifyReferenceComponent, {
      width: '35%',
    });
  }

  openDialogDetailsReference(): void {
    let dialogRef = this.dialog.open(DetailsReferenceComponent, {
      width: '60%',
    });
  }
  
  openDialogAddCode(): void {
    let dialogRef = this.dialog.open(CodesTableComponent, {
      width: '70%',
    });
  }

  openDialogAddPage(): void {
    let dialogRef = this.dialog.open(PagesTableComponent, {
      width: '70%',
    });
  }

  ngOnInit() {
  }

}
