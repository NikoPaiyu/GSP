import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gsp-dialogs',
  templateUrl: './gsp-dialogs.component.html',
  styleUrls: ['./gsp-dialogs.component.scss']
})
export class GspDialogsComponent implements OnInit {

  @Input() opportunityid ;
  @Input() filterid ;
  @Output() selectedFilterArr = new EventEmitter() ;

  filterSelectedArr = [];


  filterOptionsArr = [{
    filterName : 'All'
  },
    {
      filterName : 'Renewal'
    },
    {
      filterName : 'Renewal at risk'
    },
    {
      filterName : 'Prospect or New Business'
    },
    {
      filterName : 'Next 30 Days'
    },
    {
      filterName : 'Next 90 Days'
    }

    ];

  constructor() { }

  ngOnInit() {
  }

  getFilterItem(filterNameObj: any) {
      this.filterSelectedArr.push(filterNameObj);
  }

  saveFilterOptions() {
    this.selectedFilterArr.next(this.filterSelectedArr);
  }

}
