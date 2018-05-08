import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CreateInvestigationComponent } from './create-investigation/create-investigation.component';
import { ModifyInvestigationComponent } from './modify-investigation/modify-investigation.component';
import { ShowInvestigationsComponent } from './show-investigations/show-investigations.component';
import { DetailsInvestigationComponent } from './details-investigation/details-investigation.component';
import { investigationsRoutingModule } from './investigations-router.module';
import { ConfirmComponent } from '../shared/confirm/confirm.component';

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
  ],
  entryComponents:[
    CreateInvestigationComponent,
    ConfirmComponent,
    ModifyInvestigationComponent,
    DetailsInvestigationComponent
  ]
})
export class InvestigationsModule { }
