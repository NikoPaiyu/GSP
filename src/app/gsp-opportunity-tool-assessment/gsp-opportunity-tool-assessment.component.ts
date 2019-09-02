import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gsp-opportunity-tool-assessment',
  templateUrl: './gsp-opportunity-tool-assessment.component.html',
  styleUrls: ['./gsp-opportunity-tool-assessment.component.scss']
})
export class GspOpportunityToolAssessmentComponent implements OnInit {

  questionTopicList = [
    {
      id : 1,
    title: 'Opportunity',
    description: 'Is there an opportunity ?',
      totalQuestions : 30 ,
      completedQuestions : 0
  },
    {
      id : 2,
      title: 'Compete',
      description: 'Can we Compete ?',
      totalQuestions : 20 ,
      completedQuestions : 0
    },
    {
      id : 3,
      title: 'Winning',
      description: 'Can we win ?',
      totalQuestions : 25 ,
      completedQuestions : 0
    },
    {
      id : 4,
      title: 'Worth Wining',
      description: 'Is it worth winning ? ',
      totalQuestions : 40 ,
      completedQuestions : 10
    }];

  questionList = [{
    title: 'Short Term Revenue',
    // tslint:disable-next-line:max-line-length
    description: 'You expect the customer’s initial order to be the same size as ( or large than ) the average opportunity size for your business and the initial\n' +
      ' order is expected within a normal sales cycle.'
  },
    {
      title: 'Future Revenue',
      // tslint:disable-next-line:max-line-length
      description: 'You expect the customer’s initial order to be the same size as ( or large than ) the average opportunity size for your business and the initial\n' +
        ' order is expected within a normal sales cycle.'
    },
    {
      title: 'Profitability',
      // tslint:disable-next-line:max-line-length
      description: 'You expect the customer’s initial order to be the same size as ( or large than ) the average opportunity size for your business and the initial\n' +
        ' order is expected within a normal sales cycle.'
    },
    {
      title: 'Degree of Risk',
      // tslint:disable-next-line:max-line-length
      description: 'You expect the customer’s initial order to be the same size as ( or large than ) the average opportunity size for your business and the initial\n' +
        ' order is expected within a normal sales cycle.'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  testingRadiobox(event: MouseEvent) {
      console.log(event);
  }
}
