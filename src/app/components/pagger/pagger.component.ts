import { Component, OnInit, Input, EventEmitter, ElementRef } from '@angular/core';

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

  private pageCount = 5;
  private currentPage = 1;
  private totals = 0;
  private pageNums = 1;
  private pageNumList = [];
  private rowList: any;
  constructor(private elementRel: ElementRef) { }

  ngOnInit() {
    this.dataChange.subscribe(data => {
      setTimeout(() => {
        this.rowList = this.target.getElementsByTagName('tr');
        this.totals = this.rowList.length;
        this.initPaging();
      }, 0);
    });
  }
  initPaging() {
    this.pageNums = Math.ceil(this.totals / this.pageCount);
    for (let p = 1; p <= this.pageNums; p++) {
      this.pageNumList.push(p);
    }
    this.paging(this.currentPage);
  }
  paging(display_page_number: number) {
    display_page_number = Number(display_page_number);
    const startIdx = Number(this.pageCount * (display_page_number - 1));
    const endIdx = startIdx + this.pageCount * 1;
    // console.log('index range =>' + startIdx + ' to ' + endIdx);
    for (let i = 0; i < this.totals; i++) {
      if (i >= startIdx && i < endIdx) {
        this.rowList.item(i).style.display = '';
      } else {
        this.rowList.item(i).style.display = 'none';
      }
    }
    this.currentPage = display_page_number;
    this.elementRel.nativeElement.querySelector('select.ps').value = this.currentPage;
  }
  prePage(event: Event) {
    event.preventDefault();
    if (this.currentPage === 1) {
      return false;
    }
    this.paging(this.currentPage - 1);
  }
  nxtPage(event: Event) {
    event.preventDefault();
    if (this.currentPage === this.pageNums) {
      return false;
    }
    this.paging(this.currentPage + 1);
  }

  changePageCount(newPageCount: number) {
    this.currentPage = 1;
    this.pageCount = newPageCount * 1;
    this.pageNumList = [];
    this.initPaging();
  }
}
