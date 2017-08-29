import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {
  public countries: string[] = [
    'mexico',
    'guatemala',
    'honduras',
    'panama',
    'costa rica',
    'el savador',
    'belize',
    'nicaragua',
    'brazil',
    'colombia',
    'argentina',
    'peru',
    'venezuela',
    'chile',
    'ecuador',
    'bolivia',
    'paraguay',
    'uruguay',
  //  'guyana',
  //  'suriname',
  //  'french Guiana',
 //   'falkland Islands',
  ];

  foundParam : boolean = false;

  constructor() { }

  public getCountries() {
    return this.countries;
  }

  public checkCountry(country: string) {
    this.foundParam = this.countries.includes(country);
    return this.foundParam;
  }
}
