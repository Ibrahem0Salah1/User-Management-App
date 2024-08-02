import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AllUsersComponent, UserComponent],
  imports: [CommonModule, SharedModule],
  exports: [AllUsersComponent, UserComponent],
})
export class UsersModule {}
