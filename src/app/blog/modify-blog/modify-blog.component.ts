import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ThematicsTableComponent } from '../../tables/thematics-table/thematics-table.component';

@Component({
  selector: 'app-modify-blog',
  templateUrl: './modify-blog.component.html',
  styleUrls: ['./modify-blog.component.scss']
})
export class ModifyBlogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialogThematic(): void {
    let dialogRef = this.dialog.open(ThematicsTableComponent, {
      width: '70%',
    });
  }

}
