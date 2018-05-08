import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CreateInvestigationComponent } from './create-investigation/create-investigation.component';
import { ModifyInvestigationComponent } from './modify-investigation/modify-investigation.component';
import { ShowInvestigationsComponent } from './show-investigations/show-investigations.component';
import { DetailsInvestigationComponent } from './details-investigation/details-investigation.component';
import { investigationsRoutingModule } from './investigations-router.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    investigationsRoutingModule
  ],
  declarations: [
    CreateInvestigationComponent, 
    ModifyInvestigationComponent, 
    ShowInvestigationsComponent, 
    DetailsInvestigationComponent
  ]
})
export class InvestigationsModule { }
