import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { DetailsBlogComponent } from '../details-blog/details-blog.component';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.scss']
})
export class ShowBlogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialogDeleteBlog(): void {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      width: '30%',
    });
  }

  openDialogDetailsBlog(): void {
    let dialogRef = this.dialog.open(DetailsBlogComponent, {
      width: '60%',
    });
  }

  ngOnInit() {
  }

}
