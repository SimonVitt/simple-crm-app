import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/main/components/dashboard/dashboard.component';
import { MainPagesComponent } from './modules/main/components/main-pages/main-pages.component';
import { UserDetailComponent } from './modules/main/components/user-detail/user-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserComponent } from './modules/main/components/user/user.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'main', canActivate: [AuthGuard], loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
