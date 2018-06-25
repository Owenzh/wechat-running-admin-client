import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { MessageService } from '../../services/message.service';
import { IArticle } from '../../interfaces/IArticle';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService: ArticleService, private message: MessageService, private router: Router) { }
  article_list: IArticle = null;
  ngOnInit() {
    this.getArticleList();
  }
  getArticleList() {
    this.articleService.getAllArticleList().then(res => {
      this.article_list = res.data.res;
    })
      .catch(err => {
        console.log(err.message);
      });
  }
  goToArticleDetail(article_item) {
    this.router.navigate(['/article_post']);
    console.log(article_item, 'ListComponent');
    this.message.sendMessage(article_item);
  }
}
