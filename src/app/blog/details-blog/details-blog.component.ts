import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-details-blog',
  templateUrl: './details-blog.component.html',
  styleUrls: ['./details-blog.component.scss']
})
export class DetailsBlogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailsBlogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
