import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagger',
  templateUrl: './pagger.component.html',
  styleUrls: ['./pagger.component.css']
})
export class PaggerComponent implements OnInit {
  @Input()
  private target: Element;
  @Input()
  private dataChange: EventEmitter<any>;

  private pageCount: number = 3;
  private currentPage: number = 1;
  private totals: number = 0;
  private pageNums: number = 1;
  constructor() { }

  ngOnInit() {
    this.dataChange.subscribe(data => {
      this.totals = data.length;
      setTimeout(() => {
        this.initPaging();
      }, 0);
    });
  }
  initPaging() {
    let trList = this.target.getElementsByTagName('tr');
    let len = trList.length;
    this.pageNums = Math.ceil(len / this.pageCount);
    // for (let i = 0; i < len; i++) {
    //   if (i > 5)
    //     trList.item(i).style.display = 'none';
    // }
  }
}
