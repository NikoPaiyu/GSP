import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Router} from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-gsp-header',
  templateUrl: './gsp-header.component.html',
  styleUrls: ['./gsp-header.component.scss']
})
export class GspHeaderComponent implements OnInit {

  @Output() pipeLineTime = new EventEmitter();
  @Output() pipeLineStage = new EventEmitter();
  @Output() opportunity = new EventEmitter();
  @Output() quotes = new EventEmitter();
  @Output() opportunityModal = new EventEmitter();

  @Input() headerName: string ;
  @Input() headerDescription: string ;
  @Input() ifPipeline: boolean ;
  @Input() ifOpportunity: boolean ;
  @Input() ifPipelinePage: boolean ;
  @Input() ifAltifyPage: boolean ;


  constructor(private router: Router , private location: Location) { }

  ngOnInit() {

  }

  getTabPipeLineStage(hrefPath) {
    this.pipeLineStage.next(hrefPath);
  }

  getTabPipeLineTime(hrefPath) {
    this.pipeLineTime.next(hrefPath);
  }

  getOpportunityModal(opportunityModal: string) {
    this.opportunityModal.next(opportunityModal);
  }

  getTabOpportunity(hrefPath){
    this.opportunity.next(hrefPath);
  }

  getTabQuotes(hrefPath){
    this.quotes.next(hrefPath);
  }

  goBackToHome() {
    this.location.back();
  }

}
