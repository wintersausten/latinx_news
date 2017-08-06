import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { NewsService } from '../news.service';

import { News } from '../news.model';

@Component({
  selector: 'app-side-news',
  templateUrl: './side-news.component.html',
  styleUrls: ['./side-news.component.css']
})
export class SideNewsComponent implements OnInit, OnChanges {
  news: News[] = [];
  @Input() start: number;
  @Input() end: number;
  @Input() country: string;

  constructor(private newsService: NewsService) { }

  ngOnChanges() {
    console.log("On change country: " + this.country);
    if(this.country){
      this.newsService.getMultipleNews(this.start, this.end, this.country)
        .subscribe(
          (news: News[]) => {
            this.news = news;
          }
        )
    }

    else{
      this.newsService.getMultipleNews(this.start, this.end)
      .subscribe(
        (news: News[]) => {
          this.news = news;
        }
      );
    } 
  }

  ngOnInit() {
    if(this.country){
      this.newsService.getMultipleNews(this.start, this.end, this.country)
        .subscribe(
          (news: News[]) => {
            this.news = news;
          }
        )
    }

    else{
      this.newsService.getMultipleNews(this.start, this.end)
      .subscribe(
        (news: News[]) => {
          this.news = news;
        }
      );
    } 
    // this.news = this.newsService.getMultipleNews(2,6);
  }

}
