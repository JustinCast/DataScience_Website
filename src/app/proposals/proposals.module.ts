import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';
import { ModifyProposalComponent } from './modify-proposal/modify-proposal.component';
import { ShowProposalComponent } from './show-proposal/show-proposal.component';
import { DetailsProposalComponent } from './details-proposal/details-proposal.component';
import {proposalsRoutingModule} from './proposals-routing.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    proposalsRoutingModule
  ],
  declarations: [
    CreateProposalComponent,
    ModifyProposalComponent,
    ShowProposalComponent,
    DetailsProposalComponent
  ],
  exports:[
    ShowProposalComponent
  ],
  entryComponents:[
    CreateProposalComponent,
    ModifyProposalComponent,
    DetailsProposalComponent
  ]
})
export class ProposalsModule { }
