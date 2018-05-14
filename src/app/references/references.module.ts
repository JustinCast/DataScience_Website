import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateReferenceComponent } from './create-reference/create-reference.component';
import { ModifyReferenceComponent } from './modify-reference/modify-reference.component';
import { DetailsReferenceComponent } from './details-reference/details-reference.component';
import { ShowReferencesComponent } from './show-references/show-references.component';
import { PagesModule } from '../pages/pages.module';
import { CodesModule }from '../codes/codes.module';
import { referencesRoutingModule } from './references-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShowPagesComponent } from '../pages/show-pages/show-pages.component';
import { ReferenceComponent } from './reference/reference.component';
import { PagesTableComponent } from '../tables/pages-table/pages-table.component';
import { CodesTableComponent } from '../tables/codes-table/codes-table.component';


@NgModule({
  imports: [
    CommonModule,
    referencesRoutingModule,
    SharedModule,    
    PagesModule,
    CodesModule
  ],
  declarations: [
    ReferenceComponent,
    CreateReferenceComponent,
    ModifyReferenceComponent,
    DetailsReferenceComponent,
    ShowReferencesComponent,
    ],
    exports:[
      ReferenceComponent
    ],
    entryComponents:[
      CreateReferenceComponent,
      ModifyReferenceComponent,
      DetailsReferenceComponent,
      PagesTableComponent,
      CodesTableComponent 
    ]
})
export class ReferencesModule { }
