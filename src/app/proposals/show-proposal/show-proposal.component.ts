import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { CreateProposalComponent } from '../create-proposal/create-proposal.component';
import { ModifyProposalComponent } from '../modify-proposal/modify-proposal.component';
import { DetailsProposalComponent } from '../details-proposal/details-proposal.component';

@Component({
  selector: 'app-show-proposal',
  templateUrl: './show-proposal.component.html',
  styleUrls: ['./show-proposal.component.scss']
})
export class ShowProposalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialogDeleteProposal(): void {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      width: '30%',
    });
  }

  openDialogDetailsProposal(): void {
    let dialogRef = this.dialog.open(DetailsProposalComponent, {
      width: '60%',
    });
  }
  ngOnInit() {
  }

}
