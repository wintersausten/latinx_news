import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { News } from './news.model';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }
  private news: News[] = [];

  // private news: News[] = [
  //   new News(
  //     "1",
  //     "Test Article 1",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur riLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ri",
  //     "https://www.blacktomato.com/wp-content/uploads/2015/05/Pehoe-mountain-lake-and-Los-Cuernos-The-Horns-National-Park-Torres-del-Paine-Chile_167957318.jpg",
  //     "Brazil"
  //   ),

  //   new News(
  //     "2",
  //     "Test Article 2",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //     "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297452914001_5280219593001-vs.jpg?pubId=5104226627001&videoId=5280219593001",
  //     "Argentina"
  //   ),

  //   new News(
  //     "3",
  //     "Test Article 3",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //     "http://peru-explorer.com/wp-content/uploads/machu-picchu-5.jpg",
  //     "Colombia"
  //   ),

  //   new News(
  //     "4",
  //     "Test Article 4",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //     "https://thespicechica.com/wp-content/uploads/2016/04/obelisco.jpg",
  //     "Uruguay"
  //   ),

  //   new News(
  //     "5",
  //     "Test Article 5",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //     "https://cdn2.hubspot.net/hubfs/165116/images/middle_market_opportunity_in_brazil.jpg",
  //     "Chile"
  //   ),

  //   new News(
  //     "6",
  //     "Test Article 6",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //     "https://www.kyvernitis.gr/wp-content/uploads/2014/09/day-11.jpg",
  //     "Peru"
  //   ),

  //   new News(
  //     "7",
  //     "Test Article 7",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //     "http://www.uruguay.at/images/uruguay4.jpg?crc=4017439046",
  //     "Uruguay"
  //   ),

  //   new News(
  //     "8",
  //     "Test Article 8",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //     "http://nica-adventures.com/wp-content/uploads/2016/06/relax-travel-nicaragua.jpg",
  //     "Brazil"
  //   ),

  //   new News(
  //     "9",
  //     "Test Article 9",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //     "http://www.puntapacificarealty.com/wp-content/uploads/2017/02/botes-panama-2.jpg",
  //     "Argentina"
  //   ),

  //   new News(
  //     "10",
  //     "Test Article 10",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //     "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5240561220001_5212917445001-vs.jpg?pubId=5104226627001&videoId=5212917445001",
  //     "Brazil"
  //   ),

  //   new News(
  //     "11",
  //     "Test Article 11",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //     "http://www.fourseasons.com/content/dam/fourseasons/images/web/COS/COS_929_1280x486.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
  //     "Chile"
  //   ),

  //   new News(
  //     "12",
  //     "Test Article 12",
  //     new Date("July 29, 2017 10:13:00"),
  //     ["John Doe", "Jane Doe"],
  //     "BBC",
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //     "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5222736789001_5212863816001-vs.jpg?pubId=5104226627001&videoId=5212863816001",
  //     "Paraguay"
  //   ),
  // ];


  public getNews(country: string){
    return this.http.get('http://localhost:3000/api/country/' + country)
      .map((response: Response) => {
        //console.log(response.json());
        const news = response.json().obj;
        let transformedNews: News[] = [];
        for (let newsArticle of news) {
          transformedNews.push(new News(newsArticle._id, newsArticle.title, newsArticle.date, newsArticle.author, newsArticle.publisher, newsArticle.text, newsArticle.image, newsArticle.country));
        }
        this.news = transformedNews;
        return this.news;
        //return transformedNews.slice();
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  public getNewsIndex(index: number, country?: string){
    //console.log(this.http.get('http://localhost:3000/api'));

    if(country){
      return this.http.get('http://localhost:3000/api/country/' + country)
      .map((response: Response) => {
        //console.log(response.json());
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

    return this.http.get('http://localhost:3000/api')
      .map((response: Response) => {
        //console.log(response.json());
        const news = response.json().obj;
        let transformedNews: News[] = [];
        for (let newsArticle of news) {
          transformedNews.push(new News(newsArticle._id, newsArticle.title, newsArticle.date, newsArticle.author, newsArticle.publisher, newsArticle.text, newsArticle.image, newsArticle.country));
        }
        this.news = transformedNews;
        return transformedNews.slice()[index];
      })
      .catch((error: any) => Observable.throw(error.json()));
    // console.log("Here");
    //return this.news.slice()[index];
  }

  public getMultipleNews(start: number, end?: number, country?: string){
    if(country){
      return this.http.get('http://localhost:3000/api/country/' + country)
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

    return this.http.get('http://localhost:3000/api')
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
    // if(end)
    //   return this.news.slice(start, end);

    // return this.news.slice(start); 
  }

  public getNewsById(id: string, country: string){
    return this.http.get('http://localhost:3000/api/country/' + country + '/news/' + id)
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
    return this.http.get('http://localhost:3000/api')
      .map((response: Response) => {
        //console.log(response.json());
        const news = response.json().obj2;
        let transformedNews: News[] = [];
        for (let newsArticle of news) {
          transformedNews.push(new News(newsArticle._id, newsArticle.title, newsArticle.date, newsArticle.author, newsArticle.publisher, newsArticle.text, newsArticle.image, newsArticle.country));
        }
        this.news = transformedNews;
        //return this.news;
        console.log(transformedNews.slice()[id]);
        return transformedNews.slice()[id];
        //return transformedNews.slice();
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  public addNews(news: News) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/api', news, options)
      .map((response: Response) => { 
        const news = response.json().obj;
        console.log(news);
        return news;
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

}
