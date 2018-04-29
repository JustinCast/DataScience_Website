import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ReferenceComponent} from './reference/reference.component';
import {CreateReferenceComponent} from './create-reference/create-reference.component';
import {DetailsReferenceComponent} from './details-reference/details-reference.component';
import {ModifyReferenceComponent} from './modify-reference/modify-reference.component';
import {ShowReferencesComponent} from './show-references/show-references.component';

import {CreateCodeComponent} from '../codes/create-code/create-code.component';
import {ModifyCodeComponent} from '../codes/modify-code/modify-code.component';
import {DetailsCodeComponent} from '../codes/details-code/details-code.component';
import {ShowCodesComponent} from '../codes/show-codes/show-codes.component';

import {CreatePageComponent} from '../pages/create-page/create-page.component';
import {ModifyPageComponent} from '../pages/modify-page/modify-page.component';
import {DetailsPageComponent} from '../pages/details-page/details-page.component';
import {ShowPagesComponent} from '../pages/show-pages/show-pages.component';
import { AddCodeComponent } from './add-code/add-code.component';
import { AddPageComponent } from './add-page/add-page.component';






const routes: Routes = [
    {
      path: 'references', component: ReferenceComponent,
        children: [
          { path: 'create-reference', component: CreateReferenceComponent},
          { path: 'show-references', component: ShowReferencesComponent},
          { path: 'modify-reference', component: ModifyReferenceComponent},
          { path: 'details-reference', component: DetailsReferenceComponent},

          { path: 'create-page', component: CreatePageComponent},
          { path: 'show-pages', component: ShowPagesComponent},
          { path: 'modify-page', component: ModifyPageComponent },
          { path: 'details-page', component: DetailsPageComponent},

          { path: 'create-code', component: CreateCodeComponent },
          { path: 'show-codes', component: ShowCodesComponent},
          { path: 'modify-code', component: ModifyCodeComponent},
          { path: 'details-code', component: DetailsCodeComponent},

          { path: 'add-code', component: AddCodeComponent},
          { path: 'add-page', component: AddPageComponent},
        ]  
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class referencesRoutingModule {
}