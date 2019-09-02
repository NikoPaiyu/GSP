import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OpportunityService} from '../core/_api/opportunity.service';
import {Router} from '@angular/router';
import {GspDialogsComponent} from '../gsp-dialogs/gsp-dialogs.component';

@Component({
  selector: 'app-gsp-opportunities',
  templateUrl: './gsp-opportunities.component.html',
  styleUrls: ['./gsp-opportunities.component.scss']
})
export class GspOpportunitiesComponent implements OnInit {

  constructor(private opportunityApi: OpportunityService , private route: Router ) {}

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
    this.sampleObj.forEach(sampleObj => {
      sampleObj['id'] = this.idCount + 1;
      this.idCount++;
    });
  }


  goToDetailView(opportunityId: number) {
    this.route.navigate(['/opportunityDetail/' + `${opportunityId}`]).then(r => console.log(r));
  }

}
