import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-code',
  templateUrl: './create-code.component.html',
  styleUrls: ['./create-code.component.scss']
})
export class CreateCodeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
