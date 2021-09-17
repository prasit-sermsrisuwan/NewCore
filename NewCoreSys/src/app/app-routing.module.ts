import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcctReceiveComponent } from './layout/acct-receive/acct-receive.component';
import { HomeComponent } from './layout/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LayoutComponent, 
    children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'receive', component: AcctReceiveComponent}
  ]},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
