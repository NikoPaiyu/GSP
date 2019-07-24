import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './core/_routing/app-routing.module';
import { AppComponent } from './app.component';
import { GspHomeComponent } from './gsp-home/gsp-home.component';
import { GspLoginComponent } from './gsp-login/gsp-login.component';
import { GspRecommendedActionsComponent } from './gsp-recommended-actions/gsp-recommended-actions.component';
import { GspOpportunitiesComponent } from './gsp-opportunities/gsp-opportunities.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GspHomeComponent,
    GspLoginComponent,
    GspRecommendedActionsComponent,
    GspOpportunitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
