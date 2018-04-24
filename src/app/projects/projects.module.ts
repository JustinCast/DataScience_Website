import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsComponent, 
    EditProjectComponent, 
    CreateProjectComponent, 
    ProjectDetailsComponent
  ]
})
export class ProjectsModule { }
