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
import { GspPipelineComponent } from './gsp-pipeline/gsp-pipeline.component';
import { GspPipilinebytimeComponent } from './gsp-pipilinebytime/gsp-pipilinebytime.component';
import { GspPipilinebystageComponent } from './gsp-pipilinebystage/gsp-pipilinebystage.component';
import { GspHeaderComponent } from './gsp-header/gsp-header.component';

@NgModule({
  declarations: [
    AppComponent,
    GspHomeComponent,
    GspLoginComponent,
    GspRecommendedActionsComponent,
    GspOpportunitiesComponent,
    GspDialogsComponent,
    GspPipelineComponent,
    GspPipilinebytimeComponent,
    GspPipilinebystageComponent,
    GspHeaderComponent
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
