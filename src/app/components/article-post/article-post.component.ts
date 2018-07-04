import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
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
  isEditModel = false;
  submitTxt = '创建文章';
  submitOKTxt = '创建文章成功';
  submitBadTxt = '创建文章失败';
  article_id = null;
  constructor(private articleService: ArticleService, private message: MessageService, private element: ElementRef) { }
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
  fillArticle(frm) {
    this.articleForm.setValue(
      {
        article_title: frm.title,
        article_author: frm.author,
        article_type: frm.category,
        article_content: frm.content
      });
  }
  onSubmit() {
    const articleObj: IVArticle = this.articleForm.value;
    if (!this.isEditModel) {
      this.articleService.createArticle(articleObj).then(res => {
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
    } else {
      articleObj.id = this.article_id;
      this.articleService.editArticle(articleObj).then(res => {
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
    this.subscription = this.message.getMessage().subscribe(msg => {
      const frm = msg.info;
      console.log(frm, 'PostComponent');
      this.fillArticle(frm);
      this.article_id = frm.id;
      this.isEditModel = true;
      this.submitTxt = '编辑保存';
      this.submitOKTxt = '编辑文章成功';
      this.submitBadTxt = '编辑文章失败';
    });
  }
  /**
   * Deprecated
   *
   * @memberof ArticlePostComponent
   */
  calculatorCSS() {
    const children = this.element.nativeElement.querySelector('.ql-editor').children;
    const len = children.length;
    for (let i = 0; i < len; i++) {
      const dom = children[i];
      const styleStr = this.returnAllStyles(dom);
      dom.style = styleStr;
    }
  }
  returnAllStyles(elem) {
    const styleString = [];
    const cs = window.getComputedStyle(elem, null);
    const len = cs.length;
    for (let i = 0; i < len; i++) {
      const style = cs[i];
      styleString.push(style + ':' + cs.getPropertyValue(style) + ';');
    }
    return styleString.join('');
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
