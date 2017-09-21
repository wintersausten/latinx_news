export class News {
  public newsID: string;
  public title: string;
  public date: Date;
  public author: string[];
  public publisher: string;
  public text: string;
  public links: string[];
  public image: string;
  public source: string;
  public country: string;


  constructor(newsID:string, title:string, date:Date, author:string[], publisher:string,
              text:string, image:string, country:string) {
    this.newsID = newsID;
    this.title = title;
    this.date = date;
    this.author = author;
    this.publisher = publisher;
    this.text = text;
    this.image= image;
    this.country = country;
  }
}
