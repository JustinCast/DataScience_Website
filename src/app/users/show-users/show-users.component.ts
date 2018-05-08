import { Component, OnInit } from '@angular/core';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { CreateUserComponent } from '../create-user/create-user.component';
import { ModifyUserComponent } from '../modify-user/modify-user.component';
import { DetailsUserComponent } from '../details-user/details-user.component';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialogDeleteInvestigation(): void {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      width: '30%',
    });
  }

  openDialogCreateUser(): void {
    let dialogRef = this.dialog.open(CreateUserComponent, {
      width: '35%',
    });
  }

  openDialogModifyUser(): void {
    let dialogRef = this.dialog.open(ModifyUserComponent, {
      width: '35%',
    });
  }

  openDialogDetailsUser(): void {
    let dialogRef = this.dialog.open(DetailsUserComponent, {
      width: '60%',
    });
  }
  
  ngOnInit() {
  }

}
