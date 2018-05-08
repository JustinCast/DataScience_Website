import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-investigation',
  templateUrl: './create-investigation.component.html',
  styleUrls: ['./create-investigation.component.scss']
})
export class CreateInvestigationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateInvestigationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
