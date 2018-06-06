import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostArticleComponent } from './post-article/post-article.component';
import { ArticleListComponent } from './article-list/article-list.component';
const routes: Routes = [
  { path: 'article', component: PostArticleComponent },
  { path: 'article_list', component: ArticleListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
