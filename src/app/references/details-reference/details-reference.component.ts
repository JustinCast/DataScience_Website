import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-details-reference',
  templateUrl: './details-reference.component.html',
  styleUrls: ['./details-reference.component.scss']
})
export class DetailsReferenceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailsReferenceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
