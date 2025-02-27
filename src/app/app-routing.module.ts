import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesLoginComponent} from './pages/page-login/pages-login.component';
import {PageInscritionComponent} from './pages/page-inscrition/page-inscrition.component';
import {PageDashboardComponent} from './pages/page-dashboard/page-dashboard.component';
import {PageStatistiquesComponent} from './pages/page-statistiques/page-statistiques.component';

const routes: Routes = [
  {
    path: 'login',
    component:PagesLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscritionComponent
  },
  {
    path:'',
    component:PageDashboardComponent,
    children:[
      {
        path:'statistiques',
        component:PageStatistiquesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
