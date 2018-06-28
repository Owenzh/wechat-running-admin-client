import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output()
  private dataLoad: EventEmitter<any> = new EventEmitter();
  constructor(private articleService: ArticleService, private message: MessageService, private router: Router) { }
  article_list: IArticle = null;
  hiddenAticleList = true;
  NoDataFound = '';
  ngOnInit() {
    this.getArticleList();
  }
  getArticleList() {
    this.articleService.getAllArticleList().then(res => {
      if (res.data.res && res.data.res.length > 0) {
        this.hiddenAticleList = false;
        this.article_list = res.data.res;
        this.dataLoad.emit(this.article_list);
      } else {
        this.NoDataFound = '未找到数据';
      }
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
