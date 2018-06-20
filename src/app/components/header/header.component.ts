import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private $location: Location) { }
  RouterMap = {
    home: '',
    post: '/article_post',
    list: '/article_list',
    report: '/article_report'
  };
  ngOnInit() {
  }
  public setNavClass(hash: string): string {
    const current_path: string = this.$location.path();
    if (current_path === this.RouterMap[hash]) {
      return 'am-active';
    }
    return '';
  }
}
