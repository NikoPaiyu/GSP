import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  API_URL = 'https://dev52647.service-now.com';

  public selectedFilterArraySource = new BehaviorSubject([]);
  selectedFilterArrayResponse = this.selectedFilterArraySource.asObservable();

  setSelectedFilterArray(updatedFilterArr: any[]) {
    this.selectedFilterArraySource.next(updatedFilterArr);
  }

}
