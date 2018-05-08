import { Component, OnInit } from '@angular/core';
import{CreateInvestigationComponent} from '../create-investigation/create-investigation.component';
import { MatDialog } from '@angular/material';
import { ModifyInvestigationComponent } from '../modify-investigation/modify-investigation.component';
@Component({
  selector: 'app-show-investigations',
  templateUrl: './show-investigations.component.html',
  styleUrls: ['./show-investigations.component.scss']
})
export class ShowInvestigationsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  openDialogCreateInvestigation(): void {
    let dialogRef = this.dialog.open(CreateInvestigationComponent, {
      width: '45%',
    });
  }

  openDialogModifyInvestigation(): void {
    let dialogRef = this.dialog.open(ModifyInvestigationComponent, {
      width: '45%',
    });
  }
  
  ngOnInit() {
  }

}
