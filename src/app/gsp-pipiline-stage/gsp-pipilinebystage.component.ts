import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gsp-pipilinebystage',
  templateUrl: './gsp-pipilinebystage.component.html',
  styleUrls: ['./gsp-pipilinebystage.component.scss']
})
export class GspPipilinebystageComponent implements OnInit {

  stageListName = [{
    title: 'Suspect',
    amount: 'USD 2,197,000',
    suspect : [
      {
        title : 'US STEEL - PITTSBURG',
        author : 'Ruperto, Arthur',
        cost : '$110,001.00',
        subList : {
          company: 'US Steel SC Opp',
          date: 'April 2016',
          type: 'Growth ',
          days : '255 Days'
        }
      },
      {
        title : 'India - PITTSBURG',
        author : 'Ruperto, Arthur',
        cost : '$110,001.00',
        subList : {
          company: 'US Steel SC Opp',
          date: 'April 2016',
          type: 'Growth ',
          days : '255 Days'
        }
      },
      {
        title : 'Europe STEEL',
        author : 'Ruperto, Arthur',
        cost : '$110,001.00',
        subList : {
          company: 'US Steel SC Opp',
          date: 'April 2016',
          type: 'Growth ',
          days : '255 Days'
        }
      },
      {
        title : 'Europe STEEL',
        author : 'Ruperto, Arthur',
        cost : '$110,001.00',
        subList : {
          company: 'US Steel SC Opp',
          date: 'April 2016',
          type: 'Growth ',
          days : '255 Days'
        }
      },
      {
        title : 'Europe STEEL',
        author : 'Ruperto, Arthur',
        cost : '$110,001.00',
        subList : {
          company: 'US Steel SC Opp',
          date: 'April 2016',
          type: 'Growth ',
          days : '255 Days'
        }
      },
      {
        title : 'Europe STEEL',
        author : 'Ruperto, Arthur',
        cost : '$110,001.00',
        subList : {
          company: 'US Steel SC Opp',
          date: 'April 2016',
          type: 'Growth ',
          days : '255 Days'
        }
      }
    ]
  },
    {
      title: 'Identify',
      amount: 'USD 2,197,000',
      suspect : [
        {
          title : 'US STEEL - PITTSBURG',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },
        {
          title : 'India - PITTSBURG',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },
        {
          title : 'Europe STEEL',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },
        {
          title : 'Europe STEEL',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },
        {
          title : 'Europe STEEL',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },

      ]
    }, {
      title: 'Qualify',
      amount: 'USD 2,197,000',
      suspect : [
        {
          title : 'US STEEL - PITTSBURG',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },
        {
          title : 'India - PITTSBURG',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },
        {
          title : 'Europe STEEL',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },
        {
          title : 'Europe STEEL',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },

      ]
    }, {
      title: 'Develop',
      amount: 'USD 2,197,000',
      suspect : [
        {
          title : 'US STEEL - PITTSBURG',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },
        {
          title : 'India - PITTSBURG',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },
        {
          title : 'Europe STEEL',
          author : 'Ruperto, Arthur',
          cost : '$110,001.00',
          subList : {
            company: 'US Steel SC Opp',
            date: 'April 2016',
            type: 'Growth ',
            days : '255 Days'
          }
        },


      ]
    }, {
      title: 'Commit',
      amount: 'USD 2,197,000'
    }
  ];

  constructor() {}

  ngOnInit() {
  }

  getStageColor(title) {

    switch (title) {
      case 'Suspect' :
        return '#D81159';
      case 'Identify' :
        return '#FFBC42';
      case 'Qualify' :
        return '#84B1ED';
      case 'Develop' :
        return '#4F86C6';
      case 'Commit' :
        return '#41D3BD';
    }

  }

}
