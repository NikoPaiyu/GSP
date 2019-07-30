import {Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gsp-header',
  templateUrl: './gsp-header.component.html',
  styleUrls: ['./gsp-header.component.scss']
})
export class GspHeaderComponent implements OnInit {

  @Output() pipeLineTime = new EventEmitter();
  @Output() pipeLineStage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getTabPipeLineStage(hrefPath) {
    this.pipeLineStage.next(hrefPath);
  }

  getTabPipeLineTime(hrefPath) {
    this.pipeLineTime.next(hrefPath);
  }

}
