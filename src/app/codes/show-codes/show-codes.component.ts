import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { DetailsCodeComponent } from '../details-code/details-code.component';
import { ModifyCodeComponent } from '../modify-code/modify-code.component';
import { CreateCodeComponent } from '../create-code/create-code.component';

@Component({
  selector: 'app-show-codes',
  templateUrl: './show-codes.component.html',
  styleUrls: ['./show-codes.component.scss']
})
export class ShowCodesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  openDialogDeleteCode(): void {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      width: '30%',
    });
  }

  openDialogCreateCode(): void {
    let dialogRef = this.dialog.open(CreateCodeComponent, {
      width: '35%',
    });
  }

  openDialogModifyCode(): void {
    let dialogRef = this.dialog.open(ModifyCodeComponent, {
      width: '35%',
    });
  }

  openDialogDetailsCode(): void {
    let dialogRef = this.dialog.open(DetailsCodeComponent, {
      width: '60%',
    });
  }

  ngOnInit() {
  }

}
