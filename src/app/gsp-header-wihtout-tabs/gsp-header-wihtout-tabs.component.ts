import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-gsp-header-wihtout-tabs',
  templateUrl: './gsp-header-wihtout-tabs.component.html',
  styleUrls: ['./gsp-header-wihtout-tabs.component.scss']
})
export class GspHeaderWihtoutTabsComponent implements OnInit {

  @Input() headerName: string;

  constructor(private location: Location , private notifier: NotifierService) {
  }

  ngOnInit() {
  }

  getTitleColor(title: string | HTMLTitleElement) {

    switch (title) {
      case 'Assessment' :
        return '#FFBC42';
      case 'Playbook' :
        return '#8283A7';
      case 'Relationships' :
        return '#41D3BD';
      case 'Criteria' :
        return '#4F86C6';
      case 'Insight' :
        return '#E85C43';
      case 'Strategy' :
        return '#FF60A4';
      case 'Actions' :
        return '#D81159';
      case 'T&I' :
        return '#77AAAD';
    }

  }

  getImageUrl(title: string) {
    switch (title) {
      case 'Assessment' :
        return '../../assets/icons/backArrowAssessment.svg';
    }
  }

  getHeaderBrandUrl(title: string) {

  }


  goBack() {
    this.location.back();
  }

  saveAssessment() {
      this.notifier.notify('default','Your Assessment has been saved !');
  }
}
