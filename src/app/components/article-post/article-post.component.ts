import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { IVArticle } from '../../interfaces/IArticle';
@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.css']
})
export class ArticlePostComponent implements OnInit {
  articleForm: FormGroup;
  alertMsg = true;
  successMsg = true;
  failMsg = true;
  errMsg = true;
  errTxt = '';
  constructor(private articleService: ArticleService) { }
  ngOnInit() {
    this.articleForm = new FormGroup({
      article_title: new FormControl('', [Validators.required]),
      article_author: new FormControl('', [Validators.required]),
      article_type: new FormControl('basic', [Validators.required]),
      article_content: new FormControl('', [Validators.required])
    });
  }
  get article_title() { return this.articleForm.get('article_title'); }
  get article_author() { return this.articleForm.get('article_author'); }
  onSubmit() {
    const articleObj: IVArticle = this.articleForm.value;
    this.articleService.createArticle(articleObj).then(res => {
      // console.log(res);
      this.alertMsg = false;
      if (res.code === 0) {
        this.successMsg = false;
        this.failMsg = true;
      } else {
        this.failMsg = false;
        this.successMsg = true;
      }
      this.articleForm.reset();
      this.cleanMsg();
    })
      .catch(err => {
        this.alertMsg = false;
        this.errMsg = false;
        this.errTxt = err.message;
        this.cleanMsg(5000);
      });
  }
  cleanMsg(time?: number) {
    setTimeout(() => {
      this.alertMsg = true;
      this.successMsg = true;
      this.failMsg = true;
      this.errMsg = true;
    }, time || 1500);
  }
}
