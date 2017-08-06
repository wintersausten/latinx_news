import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { NewsService } from '../news.service';

import { News } from '../news.model';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css']
})
export class MainNewsComponent implements OnInit, OnChanges {
  news: News;
  id:string;
  @Input() index: number;
  @Input() country: string;

  constructor(private newsService: NewsService) { }

  ngOnChanges() {
    if(this.country){
      this.newsService.getNewsIndex(this.index, this.country)
     .subscribe(
         (news: News) => {
             this.news = news;
             this.id = this.news.newsID;
             console.log(this.news);
         }
     );
    }

    else{
      this.newsService.getNewsIndex(this.index)
     .subscribe(
         (news: News) => {
             this.news = news;
             this.id = this.news.newsID;
             console.log(this.news);
         }
     );
    }
  }

  ngOnInit() {
    if(this.country){
      this.newsService.getNewsIndex(this.index, this.country)
     .subscribe(
         (news: News) => {
             this.news = news;
             this.id = this.news.newsID;
             console.log(this.news);
         }
     );
    }

    else{
      this.newsService.getNewsIndex(this.index)
     .subscribe(
         (news: News) => {
             this.news = news;
             this.id = this.news.newsID;
             console.log(this.news);
         }
     );
    }
   
    // this.news = this.newsService.getNewsIndex(1);
  }

}
