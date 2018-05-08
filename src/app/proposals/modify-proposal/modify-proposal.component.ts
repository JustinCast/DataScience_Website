import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modify-proposal',
  templateUrl: './modify-proposal.component.html',
  styleUrls: ['./modify-proposal.component.scss']
})
export class ModifyProposalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModifyProposalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
