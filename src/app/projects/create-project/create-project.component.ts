import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MemberToDisplay } from '../../models/MemberToDisplay.interface';
import { MatPaginator, MatDialog } from "@angular/material";
import { Location } from '@angular/common';
import { MembersTableComponent } from '../../tables/members-table/members-table.component';
import { InvestigationsTableComponent } from '../../tables/investigations-table/investigations-table.component';
import { ProposalTableComponent } from '../../tables/proposal-table/proposal-table.component';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  investigations = [
    "Investigación 1", 
    "Investigación 2",
    "Investigación 3"
  ]
  references = [
    "Referencia 1", 
    "Referencia 2",
    "Referencia 3"
  ]
  proposal = [
    "Referencia 1", 
    "Referencia 2",
    "Referencia 3"
  ]
  addedReferences = []

  constructor(
    private _location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onAddMembersClick(): boolean {
    let dialogRef = this.dialog.open(MembersTableComponent, {
      width: '70%',
    });
    return false
  }

  onAddInvestigationsClick(): boolean {
    let dialogRef = this.dialog.open(InvestigationsTableComponent, {
      width: '70%'
    });
    return false
  }

  onAddProposalsClick(): boolean {
    let dialogRef = this.dialog.open(ProposalTableComponent, {
      width: '70%'
    });
    return false
  }

  backClicked() {
    this._location.back();
  }

  addReference(i) {
    this.addedReferences.unshift(i)
  }

}
