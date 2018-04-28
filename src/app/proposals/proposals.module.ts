import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';
import { ProposalComponent } from './proposal/proposal.component';
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
    ProposalComponent,
    ModifyProposalComponent,
    ShowProposalComponent,
    DetailsProposalComponent
  ],
  exports:[
    ProposalComponent
  ]
})
export class ProposalsModule { }
