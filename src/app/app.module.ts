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
import { GspPipilinebytimeComponent } from './gsp-pipiline-time/gsp-pipilinebytime.component';
import { GspPipilinebystageComponent } from './gsp-pipiline-stage/gsp-pipilinebystage.component';
import { GspHeaderComponent } from './gsp-header-with-tabs/gsp-header.component';
import {GoTopButtonModule} from 'ng2-go-top-button';
import {OpportunityService} from './core/_api/opportunity.service';
import {HttpClientModule} from '@angular/common/http';
import {SharedService} from './core/_shared/shared.service';
import { GspOpportunityDetailComponent } from './gsp-opportunity-detail/gsp-opportunity-detail.component';
import { GspOpportunityDetailInfoComponent } from './gsp-opportunity-detail-info/gsp-opportunity-detail-info.component';
import { GspOpportunityDetailQuotesComponent } from './gsp-opportunity-detail-quotes/gsp-opportunity-detail-quotes.component';
import { GspFilterComponent } from './gsp-filter/gsp-filter.component';
import {FormsModule} from '@angular/forms';
import { GspHeaderWihtoutTabsComponent } from './gsp-header-wihtout-tabs/gsp-header-wihtout-tabs.component';
import { GspOpportunityToolAssessmentComponent } from './gsp-opportunity-tool-assessment/gsp-opportunity-tool-assessment.component';
import { GspOpportunityAssessmentOpportunityComponent } from './gsp-opportunity-tool-assessment/gsp-opportunity-assessment-opportunity/gsp-opportunity-assessment-opportunity.component';
import { GspOpportunityAssessmentCompeteComponent } from './gsp-opportunity-tool-assessment/gsp-opportunity-assessment-compete/gsp-opportunity-assessment-compete.component';
import { GspOpportunityAssessmentWinningComponent } from './gsp-opportunity-tool-assessment/gsp-opportunity-assessment-winning/gsp-opportunity-assessment-winning.component';
import { GspOpportunityAssessmentWorthWinningComponent } from './gsp-opportunity-tool-assessment/gsp-opportunity-assessment-worth-winning/gsp-opportunity-assessment-worth-winning.component';


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
    GspHeaderComponent,
    GspOpportunityDetailComponent,
    GspOpportunityDetailInfoComponent,
    GspOpportunityDetailQuotesComponent,
    GspFilterComponent,
    GspHeaderWihtoutTabsComponent,
    GspOpportunityToolAssessmentComponent,
    GspOpportunityAssessmentOpportunityComponent,
    GspOpportunityAssessmentCompeteComponent,
    GspOpportunityAssessmentWinningComponent,
    GspOpportunityAssessmentWorthWinningComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    NotifierModule,
    GoTopButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OpportunityService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
