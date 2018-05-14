import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { MilestonesTableComponent } from '../../tables/milestones-table/milestones-table.component';

@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.scss']
})
export class ShowProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  openDialogCreateProject(): void {
    let dialogRef = this.dialog.open(CreateProjectComponent, {
      width: '90%',
    });
  }

  openDialogModifyProject(): void {
    let dialogRef = this.dialog.open(EditProjectComponent, {
      width: '60%',
    });
  }

  openDialogDetailsProject(): void {
    let dialogRef = this.dialog.open(ProjectDetailsComponent, {
      width: '90%',
    });
  }

  openDialogDeleteProject(): void {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      width: '30%',
    });
  }

  ngOnInit() {
  }

}
