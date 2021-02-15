import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url: string = environment.backendUrl + 'countries';

  constructor(private htttp: HttpClient) { }

  getCountries() {
    return this.htttp.get<Country[]>(this.url);
  }
}
