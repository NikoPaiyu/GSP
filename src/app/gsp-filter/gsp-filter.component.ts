import { Component, OnInit , Input } from '@angular/core';


@Component({
  selector: 'app-gsp-filter',
  templateUrl: './gsp-filter.component.html',
  styleUrls: ['./gsp-filter.component.scss']
})
export class GspFilterComponent implements OnInit {

  @Input() filterArr: [] = [] ;

  constructor() { }

  ngOnInit() {
  }

  removeFilter(i: number) {
    this.filterArr.splice(i, 1);
  }
}
