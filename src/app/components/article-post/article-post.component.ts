import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { MessageService } from '../../services/message.service';
import { IVArticle } from '../../interfaces/IArticle';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.css']
})
export class ArticlePostComponent implements OnInit, AfterViewInit, OnDestroy {
  articleForm: FormGroup;
  alertMsg = true;
  successMsg = true;
  failMsg = true;
  errMsg = true;
  errTxt = '';
  public subscription: Subscription;
  constructor(private articleService: ArticleService, private message: MessageService) { }
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
  get article_type() { return this.articleForm.get('article_type'); }
  get article_content() { return this.articleForm.get('article_content'); }
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

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit---');

    this.subscription = this.message.getMessage().subscribe(msg => {
      // 根据msg，来处理你的业务逻辑。
      console.log('----------SASA----');
      console.log(this.articleForm.value);
      let frm = msg.info;
      this.articleForm.setValue(
        {
          article_title: frm.title,
          article_author: frm.author,
          article_type: frm.category,
          article_content: frm.content
        },
        { onlySelf: false, emitEvent: true });
      this.subscription.unsubscribe();
      console.log(this.articleForm.value);
    });
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
