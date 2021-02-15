import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MatPaginator } from '@angular/material';

import { Country } from '../country.model';
import { CountryService } from '../country.service';
import { Page } from '../../core/models/page.model';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  countryList: Country[];
  country: string;
  phoneValid: boolean;
  customerPage: Page<Customer> = new Page<Customer>();
  displayedColumns: string[] = ['id', 'name', 'countryName', 'countryCode', 'phone', 'phoneValid'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private countryService: CountryService,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(countryList => this.countryList = countryList);
    this.getCustomerPage(null, null, null, null);
  }

  onFilter(filterForm) {   
    this.getCustomerPage(
      this.country,
      this.phoneValid,
      0, this.paginator.pageSize);
  }

  onPage(event) {   
    this.getCustomerPage(
      this.country,
      this.phoneValid,
      this.paginator.pageIndex, this.paginator.pageSize);
  }

  private  getCustomerPage(country: string, phoneValid: boolean, pageIndex: number, pageSize: number) {  
    let promise = customerPage => {
        this.customerPage = customerPage;
        this.paginator.pageIndex = customerPage.pageIndex; 
      };
    this.customerService.getCustomerPage(country, phoneValid, pageIndex, pageSize).subscribe(promise);
  }
}
