import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PageInscritionComponent } from './pages/page-inscrition/page-inscrition.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesLoginComponent,
    PageInscritionComponent
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
