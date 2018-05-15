import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ModifyBlogComponent } from './modify-blog/modify-blog.component';
import { DetailsBlogComponent } from './details-blog/details-blog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShowBlogComponent, 
    CreateBlogComponent, 
    ModifyBlogComponent,
    DetailsBlogComponent
  ]
})
export class BlogModule { }
