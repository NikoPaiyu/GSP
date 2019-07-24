import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gsp-login',
  templateUrl: './gsp-login.component.html',
  styleUrls: ['./gsp-login.component.scss']
})
export class GspLoginComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }


  goToHome(){
    this._route.navigate(['/home']);
  }

}
