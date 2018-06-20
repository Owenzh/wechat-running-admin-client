import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleReportComponent } from './article-report.component';

describe('ArticleReportComponent', () => {
  let component: ArticleReportComponent;
  let fixture: ComponentFixture<ArticleReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
