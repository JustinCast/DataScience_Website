import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MembersTableComponent } from '../../tables/members-table/members-table.component';

@Component({
  selector: 'app-create-investigation',
  templateUrl: './create-investigation.component.html',
  styleUrls: ['./create-investigation.component.scss']
})
export class CreateInvestigationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialogMembers(): void {
    let dialogRef = this.dialog.open(MembersTableComponent, {
      width: '70%',
    });
  }
  
  ngOnInit() {
  }

}
