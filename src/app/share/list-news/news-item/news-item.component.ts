import { Component, OnInit, Input } from '@angular/core';

import { News } from '../../news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() news: News;
  country: string;

  constructor() { }

  ngOnInit() {
    this.country = this.news.country.toLowerCase();
  }

}
