import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreateProjectComponent } from "./create-project/create-project.component";
import { EditProjectComponent } from "./edit-project/edit-project.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { ShowProjectsComponent } from "./show-projects/show-projects.component";

const ROUTES: Routes = [
    { 
        path: 'projects', component: ProjectsComponent,
            children: [
                { path: 'project/:id', component: ProjectDetailsComponent },
                { path: 'edit-project/:id', component: EditProjectComponent },
                { path: 'create-project', component: CreateProjectComponent },
                { path: 'show-projects', component: ShowProjectsComponent}
            ]
    },
]

@NgModule({
    imports: [
      RouterModule.forChild(ROUTES)
    ],
    exports: [
      RouterModule
    ]
  })
  export class ProjectsRoutingModule {
  }