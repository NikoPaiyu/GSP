import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gsp-opportunity-detail-info',
  templateUrl: './gsp-opportunity-detail-info.component.html',
  styleUrls: ['./gsp-opportunity-detail-info.component.scss']
})
export class GspOpportunityDetailInfoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToAssessmentPage() {
    this.route.navigate(['/assessment']);
  }

}
