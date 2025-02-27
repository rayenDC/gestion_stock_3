import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesLoginComponent } from './pages/page-login/pages-login.component';
import { PageInscritionComponent } from './pages/page-inscrition/page-inscrition.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesLoginComponent,
    PageInscritionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
