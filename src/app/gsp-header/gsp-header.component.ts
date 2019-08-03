import {Component, OnInit, Output , EventEmitter} from '@angular/core';
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
  @Output() opportunityModal = new EventEmitter();

  constructor(private router: Router , private location: Location) { }

  ngOnInit() {}

  getTabPipeLineStage(hrefPath) {
    this.pipeLineStage.next(hrefPath);
  }

  getTabPipeLineTime(hrefPath) {
    this.pipeLineTime.next(hrefPath);
  }

  goBackToHome() {
   this.location.back();
  }

  getOpportunityModal(opportunityModal: string) {
    this.opportunityModal.next(opportunityModal);
  }

}
