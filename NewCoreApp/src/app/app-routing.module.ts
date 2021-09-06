import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { ReceiveComponent } from './main/receive/receive.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'receive', component: ReceiveComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
