import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CountryService } from '../country.service' ;
import { NewsService } from '../share/news.service';

import { News } from '../share/news.model';

@Component({
  selector: 'app-country-new',
  templateUrl: './country-new.component.html',
  styleUrls: ['./country-new.component.css']
})
export class CountryNewComponent implements OnInit, OnDestroy {
  country: string;
  countryDisplay: string;
  news: News[];
  isNews: boolean = false;

  constructor(private countryService: CountryService,
              private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.country = params['countryName'];
          console.log(this.country);
          this.countryDisplay = this.country;
          this.countryDisplay = this.countryDisplay.toUpperCase();
          this.country = this.country.toLowerCase();
          if(!this.countryService.checkCountry(this.country))
          {
            this.router.navigate(['not-found']);
          }
        }
      );

    this.newsService.getNews(this.country)
      .subscribe(
        (news: News[]) => {
          this.news = news;

          if(news.length > 0)
            this.isNews = true;

          else
            this.isNews = false;

          console.log(this.isNews);
        }
      );
  }

  ngOnDestroy() {
    this.news = [];
    this.isNews = false;
  }
}

