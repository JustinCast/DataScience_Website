import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCodeComponent } from './create-code/create-code.component';
import { ModifyCodeComponent } from './modify-code/modify-code.component';
import { ShowCodesComponent } from './show-codes/show-codes.component';
import { DetailsCodeComponent } from './details-code/details-code.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CreateCodeComponent,
    ModifyCodeComponent, 
    ShowCodesComponent, 
    DetailsCodeComponent
  ],
  exports:[
    
  ]
})
export class CodesModule { }
