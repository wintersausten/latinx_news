import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { News } from './news.model';

@Injectable()
export class NewsService {

  private BASE_URL : string = 'http://localhost:3000/api';

  constructor(private http: Http) { }
  private news: News[] = [];

  public getNews(country: string){
    return this.http.get(`${this.BASE_URL}/country/${country}`)
      .map((response: Response) => {
        const news = response.json().obj;
        let transformedNews: News[] = [];
        for (let newsArticle of news) {
          transformedNews.push(new News(newsArticle._id, newsArticle.title, newsArticle.date, newsArticle.author, newsArticle.publisher, newsArticle.text, newsArticle.image, newsArticle.country));
        }
        this.news = transformedNews;
        return this.news;
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  public getNewsIndex(index: number, country?: string){
    if(country){
      return this.http.get(`${this.BASE_URL}/country/${country}`)
      .map((response: Response) => {
        const news = response.json().obj;
        let transformedNews: News[] = [];
        for (let newsArticle of news) {
          transformedNews.push(new News(newsArticle._id, newsArticle.title, newsArticle.date, newsArticle.author, newsArticle.publisher, newsArticle.text, newsArticle.image, newsArticle.country));
        }
        this.news = transformedNews;
        return transformedNews.slice()[index];
      })
      .catch((error: any) => Observable.throw(error.json()));
    }

    return this.http.get(`${this.BASE_URL}`)
      .map((response: Response) => {
        const news = response.json().obj;
        let transformedNews: News[] = [];
        for (let newsArticle of news) {
          transformedNews.push(new News(newsArticle._id, newsArticle.title, newsArticle.date, newsArticle.author, newsArticle.publisher, newsArticle.text, newsArticle.image, newsArticle.country));
        }
        this.news = transformedNews;
        return transformedNews.slice()[index];
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  public getMultipleNews(start: number, end?: number, country?: string){
    if(country){
      return this.http.get(`${this.BASE_URL}/country/${country}`)
      .map((response: Response) => {
        const news = response.json().obj;
        let transformedNews: News[] = [];
        for (let newsArticle of news) {
          transformedNews.push(new News(newsArticle._id, newsArticle.title, newsArticle.date, newsArticle.author, newsArticle.publisher, newsArticle.text, newsArticle.image, newsArticle.country));
        }
        this.news = transformedNews;

        if(end)
         return transformedNews.slice(start, end);

        return transformedNews.slice(start);
      })
      .catch((error: any) => Observable.throw(error.json()));
    }

    return this.http.get(`${this.BASE_URL}`)
      .map((response: Response) => {
        const news = response.json().obj;
        let transformedNews: News[] = [];
        for (let newsArticle of news) {
          transformedNews.push(new News(newsArticle._id, newsArticle.title, newsArticle.date, newsArticle.author, newsArticle.publisher, newsArticle.text, newsArticle.image, newsArticle.country));
        }
        this.news = transformedNews;

        if(end)
         return transformedNews.slice(start, end);

        return transformedNews.slice(start);
      })
      .catch((error: any) => Observable.throw(error.json())); 
  }

  public getNewsById(id: string, country: string){
    return this.http.get(`${this.BASE_URL}/country/${country}/news/${id}`)
      .map((response: Response) => {
        const news = response.json().obj;
        let transformedNews: News;
        transformedNews = new News(news._id, news.title, news.date, news.author, news.publisher, news.text, news.image, news.country);
        this.news.push(transformedNews); // = transformedNews;
        return transformedNews;
      })
      .catch((error: any) => Observable.throw(error.json()));
    // return this.news.slice()[(+id) - 1];
  }

  public getASUCDNews(id: number){
    return this.http.get(`${this.BASE_URL}`)
      .map((response: Response) => {
        const news = response.json().obj2;
        let transformedNews: News[] = [];
        for (let newsArticle of news) {
          transformedNews.push(new News(newsArticle._id, newsArticle.title, newsArticle.date, newsArticle.author, newsArticle.publisher, newsArticle.text, newsArticle.image, newsArticle.country));
        }
        this.news = transformedNews;
        console.log(transformedNews.slice()[id]);
        return transformedNews.slice()[id];
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  public addNews(news: News) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.BASE_URL}`, news, options)
      .map((response: Response) => { 
        const news = response.json().obj;
        console.log(news);
        return news;
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

}
