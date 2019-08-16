import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {GridBooksComponent} from './pages/grid-books/grid-books.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/grid-books', pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'grid-books', component: GridBooksComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
