import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.css']
})
export class ArticlePostComponent implements OnInit {
  articleForm: FormGroup;
  constructor() { }
  ngOnInit() {
    this.articleForm = new FormGroup({
      article_title: new FormControl('', [Validators.required]),
      article_type: new FormControl('basic', [Validators.required]),
      article_content: new FormControl('文章内容', [Validators.required])
    });
  }
  get article_title() { return this.articleForm.get('article_title'); }
  onSubmit() {
    console.log(this.article_title);
    console.log(this.articleForm.value);
  }
}
