import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';
import { News } from '../news.model';

@Component({
  selector: 'app-cover-news',
  templateUrl: './cover-news.component.html',
  styleUrls: ['./cover-news.component.css']
})
export class CoverNewsComponent implements OnInit {
  news: News;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
     this.newsService.getNewsIndex(0)
      .subscribe(
        (news: News) => {
          this.news = news;
        }
      );
    // this.news = this.newsService.getNewsIndex(0);
    //this.news.country = this.news.country.toLowerCase();
    //console.log(this.news.country);
  }

}
