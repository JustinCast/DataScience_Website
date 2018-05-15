import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ReferenceComponent} from './references/reference/reference.component'
import { ShowInvestigationsComponent } from "./investigations/show-investigations/show-investigations.component";
import { ShowProposalComponent } from "./proposals/show-proposal/show-proposal.component";
import { ShowUsersComponent } from "./users/show-users/show-users.component";
import { ShowBlogComponent } from "./blog/show-blog/show-blog.component";
export const ROUTES : Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'show-projects', component: ShowUsersComponent},
    { path:  'show-users', component: ShowUsersComponent },
    { path: 'references', component: ReferenceComponent},
    { path: 'show-investigations', component: ShowInvestigationsComponent},
    { path: 'show-proposals', component: ShowProposalComponent},
    { path: 'show-blog', component: ShowBlogComponent}

]
