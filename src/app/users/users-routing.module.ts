import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CreateUserComponent} from './create-user/create-user.component'
import {ModifyUserComponent} from './modify-user/modify-user.component'
import {UsersComponent} from './users/users.component'
import {DetailsUserComponent} from './details-user/details-user.component'
import {ShowUsersComponent} from './show-users/show-users.component';


const routes: Routes = [
    {
      path: 'users', component: UsersComponent,
        children: [
          { path: 'details-user', component: DetailsUserComponent},
          { path: 'create-user', component: CreateUserComponent},
          { path: 'modify-user', component: ModifyUserComponent},
          { path: 'show-users', component: ShowUsersComponent}
        ]
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class usersRoutingModule {
}