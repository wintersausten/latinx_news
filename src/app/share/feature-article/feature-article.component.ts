import { Component, OnInit, Input } from '@angular/core';

import { NewsService } from '../news.service';
import { News } from '../news.model';

@Component({
  selector: 'app-feature-article',
  templateUrl: './feature-article.component.html',
  styleUrls: ['./feature-article.component.css']
})
export class FeatureArticleComponent implements OnInit {
  @Input() index: number;
  news: News;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
     this.newsService.getNewsIndex(this.index)
      .subscribe(
        (news: News) => {
          this.news = news;
        }
      );
    // this.news = this.newsService.getNewsIndex(this.index);
    //console.log(this.index);
  }

}
