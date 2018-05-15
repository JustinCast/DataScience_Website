import { Component, OnInit } from '@angular/core';
import { ThematicsTableComponent } from '../../tables/thematics-table/thematics-table.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialogThematic(): void {
    let dialogRef = this.dialog.open(ThematicsTableComponent, {
      width: '70%',
    });
  }
}
