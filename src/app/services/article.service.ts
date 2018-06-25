import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IVArticle } from '../interfaces/IArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private $http: HttpClient) { }

  createArticle(article: IVArticle): Promise<any> {
    const paramsObj = {
      title: article.article_title,
      category: article.article_type,
      author: article.article_author,
      content: article.article_content
    };
    return this.$http.post('/api/article_post', { params: paramsObj }).toPromise();
  }
  editArticle(article: IVArticle): Promise<any> {
    const paramsObj = {
      id: article.id,
      title: article.article_title,
      category: article.article_type,
      author: article.article_author,
      content: article.article_content
    };
    return this.$http.put('/api/article_post', { params: paramsObj }).toPromise();
  }
  getAllArticleList(): Promise<any> {
    return this.$http.get('/api/article_list').toPromise();
  }
}
