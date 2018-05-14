import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ThematicsTableComponent } from '../../tables/thematics-table/thematics-table.component';
import { MembersTableComponent } from '../../tables/members-table/members-table.component';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.scss']
})
export class CreateProposalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialogThematic(): void {
    let dialogRef = this.dialog.open(ThematicsTableComponent, {
      width: '70%',
    });
  }

  openDialogMember(): void {
    let dialogRef = this.dialog.open(MembersTableComponent, {
      width: '70%',
    });
  }
  
  ngOnInit() {
  }

}
