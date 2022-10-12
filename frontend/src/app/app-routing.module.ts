import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditComponent} from './pages/edit/edit.component';
import {ListComponent} from './pages/list/list.component';
import {LoginComponent} from './pages/login/login.component';
import {NewComponent} from './pages/new/new.component';
import {RegisterComponent} from './pages/register/register.component';
import {UserGuardGuard} from './user-guard.guard'

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'list', component: ListComponent, canActivate:[UserGuardGuard]},
  {path: 'edit/:id', component: EditComponent, canActivate:[UserGuardGuard]},
  {path: 'new', component: NewComponent, canActivate:[UserGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
