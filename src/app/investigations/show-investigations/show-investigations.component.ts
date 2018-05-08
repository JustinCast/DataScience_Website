import { Component, OnInit } from '@angular/core';
import{CreateInvestigationComponent} from '../create-investigation/create-investigation.component';
import { MatDialog } from '@angular/material';
import { ModifyInvestigationComponent } from '../modify-investigation/modify-investigation.component';
import { DetailsInvestigationComponent } from '../details-investigation/details-investigation.component';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
@Component({
  selector: 'app-show-investigations',
  templateUrl: './show-investigations.component.html',
  styleUrls: ['./show-investigations.component.scss']
})
export class ShowInvestigationsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  openDialogCreateInvestigation(): void {
    let dialogRef = this.dialog.open(CreateInvestigationComponent, {
      width: '35%',
    });
  }

  openDialogModifyInvestigation(): void {
    let dialogRef = this.dialog.open(ModifyInvestigationComponent, {
      width: '35%',
    });
  }

  openDialogDetailsInvestigation(): void {
    let dialogRef = this.dialog.open(DetailsInvestigationComponent, {
      width: '60%',
    });
  }

  openDialogDeleteInvestigation(): void {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      width: '30%',
    });
  }
  
  ngOnInit() {
  }

}
