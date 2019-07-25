import { Component, OnInit } from '@angular/core';
import {NotifierService} from 'angular-notifier';


@Component({
  selector: 'app-gsp-recommended-actions',
  templateUrl: './gsp-recommended-actions.component.html',
  styleUrls: ['./gsp-recommended-actions.component.scss'],
})
export class GspRecommendedActionsComponent implements OnInit {

  sampleObj = [
    {
    id : 1,
      state : 'block',
    actionTitle : 'AXIALL - PA',
    actionDesc  : 'Calendarize the Mid Year Review Meeting',
    date : 'Nov 2016',
    cost : 'USD289,637.00',
  },
  {
    id : 2,
    actionTitle : 'AXIALL - PA',
    state : 'block',
    actionDesc  : 'Calendarize the Mid Year Review Meeting',
    date : 'Nov 2016',
    cost : 'USD289,637.00',
  },
  {
    id : 3,
    actionTitle : 'AXIALL - PA',
    state : 'block',
    actionDesc  : 'Calendarize the Mid Year Review Meeting',
    date : 'Nov 2016',
    cost : 'USD289,637.00',
  },
  {
    id : 4,
    actionTitle : 'AXIALL - PA',
    state : 'block',
    actionDesc  : 'Calendarize the Mid Year Review Meeting',
    date : 'Nov 2016',
    cost : 'USD289,637.00',
  },
  {
    id : 5,
    actionTitle : 'AXIALL - PA',
    state : 'block',
    actionDesc  : 'Calendarize the Mid Year Review Meeting',
    date : 'Nov 2016',
    cost : 'USD289,637.00',
  },


];

  constructor(private notifier: NotifierService) { }

  ngOnInit() {
  }


  clearRecommendedActionList(index , Obj ) {
    this.sampleObj.splice(index, 1);
    this.notifier.notify('default', 'Action ' + `${Obj.actionTitle}` + ' is deleted !');
  }

}
