import { Component, OnInit, Input } from '@angular/core';

import { News } from '../../news.model';

@Component({
  selector: 'app-side-news-item',
  templateUrl: './side-news-item.component.html',
  styleUrls: ['./side-news-item.component.css']
})
export class SideNewsItemComponent implements OnInit {
  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

}
