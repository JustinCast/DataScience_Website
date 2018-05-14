import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { MembersTableComponent } from '../../tables/members-table/members-table.component';

@Component({
  selector: 'app-modify-investigation',
  templateUrl: './modify-investigation.component.html',
  styleUrls: ['./modify-investigation.component.scss']
})
export class ModifyInvestigationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialogMembers(): void {
    let dialogRef = this.dialog.open(MembersTableComponent, {
      width: '70%',
    });
  }

  ngOnInit() {
  }

}
