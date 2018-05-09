import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modify-page',
  templateUrl: './modify-page.component.html',
  styleUrls: ['./modify-page.component.scss']
})
export class ModifyPageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModifyPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }

}
