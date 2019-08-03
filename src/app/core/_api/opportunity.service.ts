import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SharedService} from '../_shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private http: HttpClient , private shared: SharedService) { }

  getOpportunities(): Observable<any> {
    return this.http.get(this.shared.API_URL + '/api/now/table/x_174999_ll_sfa_opportunity?sysparm_display_value=true');
  }

}
