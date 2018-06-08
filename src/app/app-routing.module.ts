import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePostComponent } from './article-post/article-post.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleReportComponent } from './article-report/article-report.component';

const routes: Routes = [
  { path: 'article_post', component: ArticlePostComponent },
  { path: 'article_list', component: ArticleListComponent },
  { path: 'article_report', component: ArticleReportComponent }
];
@NgModule({
  declarations: [
    ArticlePostComponent,
    ArticleListComponent,
    ArticleReportComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
