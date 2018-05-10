import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShowBlogComponent, 
    AddBlogComponent
  ]
})
export class BlogModule { }
