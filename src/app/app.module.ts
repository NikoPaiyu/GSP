import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './core/_routing/app-routing.module';
import { AppComponent } from './app.component';
import { GspHomeComponent } from './gsp-home/gsp-home.component';
import { GspLoginComponent } from './gsp-login/gsp-login.component';
import { GspRecommendedActionsComponent } from './gsp-recommended-actions/gsp-recommended-actions.component';
import { GspOpportunitiesComponent } from './gsp-opportunities/gsp-opportunities.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';
import { GspDialogsComponent } from './gsp-dialogs/gsp-dialogs.component';

@NgModule({
  declarations: [
    AppComponent,
    GspHomeComponent,
    GspLoginComponent,
    GspRecommendedActionsComponent,
    GspOpportunitiesComponent,
    GspDialogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
