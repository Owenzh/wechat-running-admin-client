import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { IArticle } from '../../interfaces/IArticle';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService: ArticleService) { }
  article_list: IArticle = null;
  ngOnInit() {
    this.getArticleList();
  }
  getArticleList() {
    this.articleService.getAllArticleList().then(res => {
      this.article_list = res.data.res;
      console.log(this.article_list);
    })
      .catch(err => {
        console.log(err.message);
      });
  }
}
