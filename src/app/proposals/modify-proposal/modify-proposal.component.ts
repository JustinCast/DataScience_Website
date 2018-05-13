import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ThematicsTableComponent } from '../../tables/thematics-table/thematics-table.component';

@Component({
  selector: 'app-modify-proposal',
  templateUrl: './modify-proposal.component.html',
  styleUrls: ['./modify-proposal.component.scss']
})
export class ModifyProposalComponent implements OnInit {

  constructor(public dialog: MatDialog){}

  openDialogThematic(): void {
    let dialogRef = this.dialog.open(ThematicsTableComponent, {
      width: '70%',
    });
  }
  ngOnInit() {
  }

}
