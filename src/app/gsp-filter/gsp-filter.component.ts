import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {SharedService} from '../core/_shared/shared.service';


@Component({
  selector: 'app-gsp-filter',
  templateUrl: './gsp-filter.component.html',
  styleUrls: ['./gsp-filter.component.scss']
})
export class GspFilterComponent implements OnInit {

  filterArr: any[];

  constructor(private shared: SharedService) {
  }

  ngOnInit() {
    this.gettingFilterItems();
  }

  gettingFilterItems() {
    this.shared.selectedFilterArrayResponse.subscribe(filterArr => {
      this.filterArr = filterArr;
    });
  }

  removeFilter(filterObj: any , index: number) {

    // Updating the Filter Object
    filterObj.selected = false;

    // Deleting from the array
    this.filterArr.splice(index, 1);

    // Updating the Global Shared Array
    this.shared.setSelectedFilterArray(this.filterArr);

  }

}
