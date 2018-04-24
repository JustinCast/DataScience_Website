import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectsComponent, EditProjectComponent, CreateProjectComponent]
})
export class ProjectsModule { }
