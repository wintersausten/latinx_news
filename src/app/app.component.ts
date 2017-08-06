import { Component, AnimationTransitionEvent, OnInit } from '@angular/core';

import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public countries: string[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countries = this.countryService.getCountries();
  }

  private _opened: boolean = false;
 
  private _toggleSidebar() {
    console.log(this._opened);
    this._opened = !this._opened;
  }
}
