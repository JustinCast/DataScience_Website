import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.routing';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { ProposalsModule } from './proposals/proposals.module';
import { ReferencesModule} from './references/references.module'
import { CodesModule } from './codes/codes.module';
import { PagesModule } from './pages/pages.module';
import { InvestigationsModule } from './investigations/investigations.module';
import { BlogModule } from './blog/blog.module';
import { MembersTableComponent } from './tables/members-table/members-table.component';
import { ThematicsTableComponent } from './tables/thematics-table/thematics-table.component';
import { ReferencesTableComponent } from './tables/references-table/references-table.component';
import { InvestigationsTableComponent } from './tables/investigations-table/investigations-table.component';
import { PagesTableComponent } from './tables/pages-table/pages-table.component';
import { CodesTableComponent } from './tables/codes-table/codes-table.component';
import { MilestonesTableComponent } from './tables/milestones-table/milestones-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MembersTableComponent,
    ThematicsTableComponent,
    ReferencesTableComponent,
    InvestigationsTableComponent,
    PagesTableComponent,
    CodesTableComponent,
    MilestonesTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    ProjectsModule,
    SharedModule,
    UsersModule,
    ProposalsModule,
    ReferencesModule,
    CodesModule,
    PagesModule,
    InvestigationsModule,
    BlogModule

  ],
  entryComponents: [
    MembersTableComponent,
    InvestigationsTableComponent,
    MilestonesTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
