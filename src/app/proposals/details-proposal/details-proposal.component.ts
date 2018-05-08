import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-details-proposal',
  templateUrl: './details-proposal.component.html',
  styleUrls: ['./details-proposal.component.scss']
})
export class DetailsProposalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailsProposalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
