import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateUserComponent, ModifyUserComponent, UsersComponent, DetailsUserComponent]
})
export class UsersModule { }
