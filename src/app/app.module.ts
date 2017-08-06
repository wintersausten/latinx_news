import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { AppRouteModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountryNewComponent } from './country-new/country-new.component';
import { MainNewsComponent } from './share/main-news/main-news.component';
import { SideNewsComponent } from './share/side-news/side-news.component';
import { ListNewsComponent } from './share/list-news/list-news.component';
import { MainComponent } from './main/main.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { CountryService } from './country.service';
import { NewsService } from './share/news.service';
import { NewsItemComponent } from './share/list-news/news-item/news-item.component';

import { SummarizePipe } from './share/summary.pipe';
import { AuthorsPipe } from './share/authors.pipe';
import { SideNewsItemComponent } from './share/side-news/side-news-item/side-news-item.component';
import { CoverNewsComponent } from './share/cover-news/cover-news.component';
import { FeatureArticleComponent } from './share/feature-article/feature-article.component';
import { ArticlePageComponent } from './share/article-page/article-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryNewComponent,
    MainNewsComponent,
    SideNewsComponent,
    ListNewsComponent,
    MainComponent,
    ErrorPageComponent,
    NewsItemComponent,
    SummarizePipe,
    AuthorsPipe,
    SideNewsItemComponent,
    CoverNewsComponent,
    FeatureArticleComponent,
    ArticlePageComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    AppRouteModule,
    HttpModule,
  ],
  providers: [CountryService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}


