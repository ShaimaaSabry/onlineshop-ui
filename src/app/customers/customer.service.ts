import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Page } from '../core/models/page.model';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url: string = environment.backendUrl + 'customers';

  constructor(private http: HttpClient) { }

  getCustomerPage(country, phoneValid, pageIndex, pageSize) {
    let params = new HttpParams();

    if(country) 
      params = params.set('country', country);
    if(phoneValid) 
    params = params.set('phoneValid', phoneValid);
    if(pageIndex) 
      params = params.set('pageIndex', pageIndex);
    if(pageSize) 
      params = params.set('pageSize', pageSize);

    let options = { params: params };
    return this.http.get<Page<Customer>>(this.url, options);
  }
}
