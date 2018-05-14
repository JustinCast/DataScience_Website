import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-details-code',
  templateUrl: './details-code.component.html',
  styleUrls: ['./details-code.component.scss']
})
export class DetailsCodeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailsCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
