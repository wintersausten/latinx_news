import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CountryService } from '../country.service';
import { NewsService } from '../share/news.service';
import { News } from '../share/news.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  providers: [ CountryService ]
})
export class AddArticleComponent implements OnInit {
  public countries : string[] = [];
  public news : News = new News('', '', new Date(), [''], '', '', '', '');

  constructor( private countryService: CountryService,
  	private newsService: NewsService ) { }

  public onSubmit() {
  	let transformedNews = new News('', this.news.title, this.news.date, this.news.author, 'ASUCD', this.news.text, this.news.image, this.news.country);
  	this.newsService.addNews(transformedNews).subscribe(
  		(res: Response) => {
  			console.log("added article");
  		},
  		(error: any) => { alert(`Cannot add article!`) });
  }

  ngOnInit() {
  	console.log('onInit fired!');
  	this.countries = this.countryService.getCountries();
  }

}
