import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { MainComponent } from './main/main.component';
import { CountryNewComponent } from './country-new/country-new.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticlePageComponent } from './share/article-page/article-page.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'country', children: [
    {path: '', redirectTo: 'not-found', pathMatch: 'full'},
    {path: ':countryName/news/:id', component: ArticlePageComponent},
    {path: ':countryName', component: CountryNewComponent},
  ]},
  { path: 'add_article', component: AddArticleComponent}, 
  { path: 'not-found', component: ErrorPageComponent},
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouteModule {

}