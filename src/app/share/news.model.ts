export class News {
  public newsID: string;
  public title: string;
  public softTitle: string;
  public date: Date;
  public copyright: string;
  public author: string[];
  public publisher: string;
  public text: string;
  public image: string;
  public tags: string[];
  public videos: string[];
  public canonicalLink: string;
  public lang: string;
  public description: string;
  public favicon: string;
  public links: string[];
  public country: string;
  public category: string;

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
