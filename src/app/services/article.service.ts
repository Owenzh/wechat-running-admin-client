import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IArticle } from '../interfaces/IArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private $http: HttpClient) { }

  createArticle(article: IArticle): Observable<any> {
    // console.log(article.article_content);
    const paramsObj = {
      title: article.article_title,
      category: article.article_type,
      author: article.article_author,
      content: article.article_content
    };
    return this.$http.post('/api/article_post', { params: paramsObj });
  }
}
