import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { SharedModule } from '../shared/shared.module';
import { usersRoutingModule} from './users-routing.module';
import { ShowUsersComponent } from './show-users/show-users.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    usersRoutingModule
  ],
  declarations: [
    CreateUserComponent, 
    ModifyUserComponent, 
    ShowUsersComponent, 
    DetailsUserComponent,
    ShowUsersComponent
  ],
  exports: [
    ShowUsersComponent
  ],
  entryComponents:[
    CreateUserComponent, 
    ModifyUserComponent, 
    ShowUsersComponent, 
    DetailsUserComponent,
  ]
})
export class UsersModule { }

