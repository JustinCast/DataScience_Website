import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects/projects.component";
import { UsersComponent }from './users/users/users.component';
export const ROUTES : Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: 'users', component: UsersComponent}
]
