import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './users/components/all-users/all-users.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserComponent } from './users/components/user/user.component';

const routes: Routes = [
  { path: '', component: AllUsersComponent },
  { path: 'allUsers', component: AllUsersComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'users/:id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
