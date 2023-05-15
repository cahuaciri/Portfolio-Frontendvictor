import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path:'index', component: IndexComponent},
  {path:'iniciar-sesion', component: IniciarSesionComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'', redirectTo:'iniciar-sesion',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
