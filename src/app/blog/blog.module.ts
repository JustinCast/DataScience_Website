import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ModifyBlogComponent } from './modify-blog/modify-blog.component';
import { DetailsBlogComponent } from './details-blog/details-blog.component';
import { SharedModule } from '../shared/shared.module';
import { blogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    blogRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    ShowBlogComponent, 
    CreateBlogComponent, 
    ModifyBlogComponent,
    DetailsBlogComponent
  ],
  exports:[
    ShowBlogComponent
  ]
})
export class BlogModule { }
