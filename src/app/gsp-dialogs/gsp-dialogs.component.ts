import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gsp-dialogs',
  templateUrl: './gsp-dialogs.component.html',
  styleUrls: ['./gsp-dialogs.component.scss']
})
export class GspDialogsComponent implements OnInit {

  @Input() opportunityid ;
  @Input() filterid ;

  constructor() { }

  ngOnInit() {
  }

}
