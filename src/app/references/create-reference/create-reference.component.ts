import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-reference',
  templateUrl: './create-reference.component.html',
  styleUrls: ['./create-reference.component.scss']
})
export class CreateReferenceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateReferenceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
