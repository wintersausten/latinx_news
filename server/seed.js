var mongoose = require("mongoose");
var News = require("./models/news");

var news = [
    { 
      title: "Is Venezuela on the brink of civil war?",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur riLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ri",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/07/31/TELEMMGLPICT000136174049-large_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg",
      country: "venezuela"
    },

    {
      title: "Venezuelan opposition leaders dragged from their homes in early morning raids",
      date: new Date("July 27, 2017 12:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/07/31/TELEMMGLPICT000136190470-small_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RWtT0gK_6EfZT336f62EI5U.jpeg",
      country: "venezuela"
    },

    {
      title: "Brazil: Congress votes on President Temer corruption charges",
      date: new Date("June 26, 2017 9:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/9747/production/_97172783_040899195-1.jpg",
      country: "brazil"
    },

    {
      title: "Colombia today announces end of Farc as drug industry booms and guerilla violence increases",
      date: new Date("July 5, 2016 8:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/06/27/TELEMMGLPICT000133124128-large_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg",
      country: "colombia"
    },

    {
      title: "Rio de Janeiro begins deploying 10,000 troops to fight crime surge",
      date: new Date("July 29, 2017 10:25:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "https://cdn2.hubspot.net/hubfs/165116/images/middle_market_opportunity_in_brazil.jpg",
      country: "brazil"
    },

    {
      title: "6.6-magnitude earthquake rattles Guatemala",
      date: new Date("May 2, 2017 10:05:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/06/14/TELEMMGLPICT000033812053-large_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg",
      country: "guatemala"
    },

    {
      title: "Ancient Aztec temple and ball court discovered in Mexico City",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/06/07/TELEMMGLPICT000131236692-large_trans_NvBQzQNjv4BqaRL1kC4G7DT9ZsZm6Pe3PehAFAI_f6ud569StXyOKH0.jpeg",
      country: "mexico"
    },

    {
      title: "Walls don't fix migration problems, Merkel says on Mexico visit",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/06/11/891b4c5d-fd1d-4eb0-ad9d-fc3c0c1bf8da-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwdCbWRXIg48_r3bhCwNyiro.jpeg",
      country: "mexico"
    },

    {
      title: "Manuel Noriega dead: Panama's former strongman dies in hospital aged 83",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/05/30/2261628_AP_Panama-Noriega27s-Return-large_trans_NvBQzQNjv4BqFB5_K9cMdGPZexEeYHxP_zyOdzJBFfxDsXhGP7P3HhI.jpg",
      country: "panama"
    },

    {
      title: "El Salvador sentences gang members to 390 years over massacre",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/05/25/TELEMMGLPICT000129923394-large_trans_NvBQzQNjv4Bqek9vKm18v_rkIPH9w2GMNoGXySPv9M1Jbe0Fc3Bi1Fk.jpeg",
      country: "el salvador"
    },

    {
      title: "President's attempt to dig in risks leaving Brazil with lame duck",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/05/20/3a06f6db-a2dd-49b4-adc8-4feb6f74edff-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwdCbWRXIg48_r3bhCwNyiro.jpeg",
      country: "brazil"
    },

    {
      title: "Argentines protest against Supreme Court ruling on Dirty War sentences",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/05/11/TELEMMGLPICT000128294977-large_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg",
      country: "argentina"
    },

    {
      title: "Nicaragua exorcism victim 'starved and beaten before killing'",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/04/26/TELEMMGLPICT000126905804-large_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg",
      country: "nicaragua"
    },

    {
      title: "Gun battle after Brazilian bandits stage brazen $40 million heist in Paraguay",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/04/25/TELEMMGLPICT000126810410-large_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg",
      country: "paraguay"
    },

    {
      title: "Colombia landslide kills at least 17 as rains lash Andes",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/05/20/3a06f6db-a2dd-49b4-adc8-4feb6f74edff-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwdCbWRXIg48_r3bhCwNyiro.jpeg",
      country: "colombia"
    },

    {
      title: "Mexico City building site collapse killing at least seven",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/04/11/TELEMMGLPICT000125670713-large_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg",
      country: "mexico"
    },

    {
      title: "Peru offers reward for capture of former president",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/02/11/JS120187264_AP_Alejandro-Toledo-NEWS-large_trans_NvBQzQNjv4BqgCXocDQF5kP7s3jSjli3eBfOCYufpxLlnk9UkSq3RIc.jpg",
     country:  "peru"
    },

    {
      title: "Chile seeks international aid amid some of worst wildfires in its history",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "BBC",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/01/23/chile-fire-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg",
      country: "chile"
    },

    {
      title: "ASUCD Article 1",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "ASUCD",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/01/23/chile-fire-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg",
      country: "uruguay"
    },

    {
      title: "ASUCD Artcile 2",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "ASUCD",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/01/23/chile-fire-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg",
      country: "venezuela"
    },

    {
      title: "ASUCD Article 3",
      date: new Date("July 29, 2017 10:13:00"),
      author: ["John Doe", "Jane Doe"],
      publisher: "ASUCD",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "http://www.telegraph.co.uk/content/dam/news/2017/01/23/chile-fire-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg",
      country: "argentina"
    },
  ];

function seedDB(){
  //Remove all news
  News.remove({}, function(err){
    if(err){
      console.log(err);
    }
    else {
      console.log("Remove news");
    }
    news.forEach(function(seed){
      News.create(seed, function(err, news){
      if(err){
        console.log(err);
      }
      else {
        console.log("Added");
      }
    })
  })
  });
}

module.exports = seedDB;
