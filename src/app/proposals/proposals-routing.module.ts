import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';
import { DetailsProposalComponent} from './details-proposal/details-proposal.component';
import { ModifyProposalComponent} from './modify-proposal/modify-proposal.component';
import { ShowProposalComponent} from './show-proposal/show-proposal.component';


const routes: Routes = [
    {path: 'show-proposals', component: ShowProposalComponent,
    children:[
      {path: 'details-proposal', component: DetailsProposalComponent},
    ]},
    {path: 'create-proposal', component: CreateProposalComponent},
    {path: 'modify-proposal', component: ModifyProposalComponent}
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class proposalsRoutingModule {
}