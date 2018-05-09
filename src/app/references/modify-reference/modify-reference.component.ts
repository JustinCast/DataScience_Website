import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modify-reference',
  templateUrl: './modify-reference.component.html',
  styleUrls: ['./modify-reference.component.scss']
})
export class ModifyReferenceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModifyReferenceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
