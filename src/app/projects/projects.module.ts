import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShowProjectsComponent } from './show-projects/show-projects.component';
import { MembersTableComponent } from '../tables/members-table/members-table.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,

  ],
  declarations: [
    ShowProjectsComponent, 
    EditProjectComponent, 
    CreateProjectComponent, 
    ProjectDetailsComponent,

  ],
  exports: [
    ShowProjectsComponent
  ],
  entryComponents:[
    ProjectDetailsComponent
  ]
})
export class ProjectsModule { }
