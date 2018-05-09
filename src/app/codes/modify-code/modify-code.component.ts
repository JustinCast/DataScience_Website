import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modify-code',
  templateUrl: './modify-code.component.html',
  styleUrls: ['./modify-code.component.scss']
})
export class ModifyCodeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModifyCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
