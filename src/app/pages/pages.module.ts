import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePageComponent } from './create-page/create-page.component';
import { ModifyPageComponent } from './modify-page/modify-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ShowPagesComponent } from './show-pages/show-pages.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CreatePageComponent,
    ModifyPageComponent,
    DetailsPageComponent,
    ShowPagesComponent
  ],
  exports: [
    
  ]
})
export class PagesModule { }
