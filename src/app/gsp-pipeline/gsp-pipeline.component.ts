import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-gsp-pipeline',
  templateUrl: './gsp-pipeline.component.html',
  styleUrls: ['./gsp-pipeline.component.scss']
})
export class GspPipelineComponent implements OnInit {

  pipeLineByTime: any;
  pipeLineByStage: any;

  constructor() { }

  ngOnInit() {


  }



}
