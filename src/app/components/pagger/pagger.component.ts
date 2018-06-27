import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagger',
  templateUrl: './pagger.component.html',
  styleUrls: ['./pagger.component.css']
})
export class PaggerComponent implements OnInit {
  @Input()
  private data: any;
  constructor() { }

  ngOnInit() {

  }
  onDataLoad(item) {
    console.log(item);
  }
}
