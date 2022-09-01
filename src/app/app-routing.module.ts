import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path:' ', component:HomeComponent},
  {path: 'login/:id', component:LoginComponent},
  {path: 'account', component:AccountComponent},
  {path: 'login', component:LoginFormComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
