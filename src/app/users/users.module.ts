import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { SharedModule } from '../shared/shared.module';
import {usersRoutingModule} from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    usersRoutingModule
  ],
  declarations: [
    CreateUserComponent, 
    ModifyUserComponent, 
    UsersComponent, 
    DetailsUserComponent
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }

