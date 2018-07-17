import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ModifyBlogComponent } from './modify-blog/modify-blog.component';
import { DetailsBlogComponent } from './details-blog/details-blog.component';


const routes: Routes = [
    {
      path: 'show-blog', component: ShowBlogComponent,
        children: [
          { path: 'details-blog', component: DetailsBlogComponent}
        ]
    },
    { path: 'create-blog', component: CreateBlogComponent},
    { path: 'modify-blog', component: ModifyBlogComponent},
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
  
export class blogRoutingModule {
}