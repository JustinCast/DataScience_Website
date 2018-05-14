import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowInvestigationsComponent} from './show-investigations/show-investigations.component'
import {CreateInvestigationComponent} from './create-investigation/create-investigation.component'
import {ModifyInvestigationComponent} from './modify-investigation/modify-investigation.component'
import {DetailsInvestigationComponent} from './details-investigation/details-investigation.component'

const routes: Routes = [
    {
      path: 'show-investigations', component: ShowInvestigationsComponent,
        children: [
          
          { path: 'details-investigation', component: DetailsInvestigationComponent}
        ]  
    },
    { path: 'create-investigation', component: CreateInvestigationComponent},
    { path: 'modify-investigation', component: ModifyInvestigationComponent},
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
  
export class investigationsRoutingModule {
}