import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { CreatePageComponent } from '../create-page/create-page.component';
import { ModifyPageComponent } from '../modify-page/modify-page.component';
import { DetailsPageComponent } from '../details-page/details-page.component';

@Component({
  selector: 'app-show-pages',
  templateUrl: './show-pages.component.html',
  styleUrls: ['./show-pages.component.scss']
})
export class ShowPagesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  openDialogDeletePage(): void {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      width: '30%',
    });
  }

  openDialogCreatePage(): void {
    let dialogRef = this.dialog.open(CreatePageComponent, {
      width: '35%',
    });
  }

  openDialogModifypage(): void {
    let dialogRef = this.dialog.open(ModifyPageComponent, {
      width: '35%',
    });
  }

  openDialogDetailsCode(): void {
    let dialogRef = this.dialog.open(DetailsPageComponent, {
      width: '60%',
    });
  }

  ngOnInit() {
  }

}
