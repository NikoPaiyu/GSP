import { Component, OnInit } from '@angular/core';
import {OpportunityService} from '../core/_api/opportunity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gsp-opportunities',
  templateUrl: './gsp-opportunities.component.html',
  styleUrls: ['./gsp-opportunities.component.scss']
})
export class GspOpportunitiesComponent implements OnInit {

  constructor(private opportunityApi: OpportunityService , private route: Router) { }

  opportunityArr = [];
  filterArr: any;


  sampleObj = [
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    },
    {
      'opportunityName' : 'EQTCorporation',
      'opportunityClient' : 'Karl Coke',
      'alerts' :
      [{
          'title'  : 'Renewal'
      },
      {
        'title'  : 'Warning'
      }],
      'date' : 'April 2019',
      'type' : 'B/Develop',
      'cost' : 'USD289,637.00'
    }

  ];
  idCount = 0 ;


  ngOnInit() {
    // this.opportunityApi.getOpportunities().subscribe(opportunityArrayResponse => {
    //   this.opportunityArr = opportunityArrayResponse;
    // });

    this.sampleObj.forEach(sampleObj => {
      sampleObj['id'] = this.idCount + 1;
      this.idCount++;
    });

    console.log(this.sampleObj);

  }


  goToDetailView(opportunityId: number) {
    this.route.navigate(['/opportunityDetail/' + `${opportunityId}`]).then(r => console.log(r));
  }
}
