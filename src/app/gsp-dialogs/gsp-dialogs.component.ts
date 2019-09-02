import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef} from '@angular/core';
import {SharedService} from '../core/_shared/shared.service';

@Component({
  selector: 'app-gsp-dialogs',
  templateUrl: './gsp-dialogs.component.html',
  styleUrls: ['./gsp-dialogs.component.scss'],
  exportAs: 'GspDialogsComponent'
})
export class GspDialogsComponent implements OnInit {

  @Input() opportunityid;
  @Input() filterid;

  @ViewChild('closeFilterModal') closeFilterModal: ElementRef;

  filterSelectedArr = [];

  filterOptionsArr = [
    {
      id: 1,
      filterName: 'All',
      selected: false
    },
    {
      id: 2,
      filterName: 'Renewal',
      selected: false
    },
    {
      id: 3,
      filterName: 'Renewal at risk',
      selected: false
    },
    {
      id: 4,
      filterName: 'Prospect or New Business',
      selected: false
    },
    {
      id: 5,
      filterName: 'Next 30 Days',
      selected: false
    },
    {
      id: 6,
      filterName: 'Next 90 Days',
      selected: false
    }

  ];

  // tslint:disable-next-line:variable-name
  constructor(private _shared: SharedService) {

  }

  ngOnInit() {

  }

  refreshFilterModal() {
    this._shared.selectedFilterArrayResponse.subscribe(filterArr => {
      this.filterSelectedArr = filterArr;
    });
  }

  getFilterItem(filterNameObj: any, event: any, index: number) {

    // Using Events help for selection
    if (event.target.checked) {
      // If true push the Obj
      this.filterSelectedArr.push(filterNameObj);

    } else {
      // If false filter out  the renaming obj
      this.filterSelectedArr = this.filterSelectedArr.filter(current => current.id !== filterNameObj.id);
    }

  }

  saveFilterOptions() {

    // Creating a reference of selected Array
    const filterTemp = Object.assign([], this.filterSelectedArr);

    // Emitting the latest value
    this._shared.setSelectedFilterArray(filterTemp);

    // Close the Modal
    this.closeFilterModal.nativeElement.click();
  }

}
