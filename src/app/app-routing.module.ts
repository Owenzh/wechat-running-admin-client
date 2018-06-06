import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePostComponent } from './article-post/article-post.component';
import { ArticleListComponent } from './article-list/article-list.component';
const routes: Routes = [
  { path: 'article_post', component: ArticlePostComponent },
  { path: 'article_list', component: ArticleListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
