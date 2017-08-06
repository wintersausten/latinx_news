import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { NewsService } from '../news.service';

import { News } from '../news.model';


@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  news: News;
  id: string;
  country: string;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (param: Params) => {
          this.id = param['id'];
          this.country = param['countryName'];
          this.country = this.country.toLowerCase();
           this.newsService.getNewsById(this.id, this.country)
            .subscribe(
              (news: News) => {
                this.news = news;
              }
            );
          // this.news = this.newsService.getNewsById(this.id);
        }
      );
  }

}
