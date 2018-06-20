import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePostComponent } from '../components/article-post/article-post.component';
import { ArticleListComponent } from '../components/article-list/article-list.component';
import { ArticleReportComponent } from '../components/article-report/article-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

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
  imports: [CommonModule, RouterModule.forRoot(routes), QuillModule, FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
