import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news.model';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  news: News[] = [];
  @Input() start;
  @Input() country;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    if(this.country){
      this.newsService.getMultipleNews(this.start, this.country)
      .subscribe(
        (news: News[]) => {
          this.news = news;
        }
      );
    }

    else {
      this.newsService.getMultipleNews(this.start)
      .subscribe(
        (news: News[]) => {
          this.news = news;
        }
      );
    }   
   // this.news = this.newsService.getMultipleNews(9);
  }

}
