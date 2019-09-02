import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GspOpportunityAssessmentWorthWinningComponent } from './gsp-opportunity-assessment-worth-winning.component';

describe('GspOpportunityAssessmentWorthWinningComponent', () => {
  let component: GspOpportunityAssessmentWorthWinningComponent;
  let fixture: ComponentFixture<GspOpportunityAssessmentWorthWinningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GspOpportunityAssessmentWorthWinningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GspOpportunityAssessmentWorthWinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
