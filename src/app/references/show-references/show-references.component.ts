import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { CreateReferenceComponent } from '../create-reference/create-reference.component';
import { ModifyReferenceComponent } from '../modify-reference/modify-reference.component';
import { DetailsReferenceComponent } from '../details-reference/details-reference.component';
import { AddCodeComponent } from '../add-code/add-code.component';
import { AddPageComponent } from '../add-page/add-page.component';



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

  openDialogCreateReference(): void {
    let dialogRef = this.dialog.open(CreateReferenceComponent, {
      width: '35%',
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
    let dialogRef = this.dialog.open(AddCodeComponent, {
      width: '60%',
    });
  }
  openDialogAddPage(): void {
    let dialogRef = this.dialog.open(AddPageComponent, {
      width: '60%',
    });
  }

  ngOnInit() {
  }

}
