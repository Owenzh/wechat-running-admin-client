import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaggerComponent } from './pagger.component';

describe('PaggerComponent', () => {
  let component: PaggerComponent;
  let fixture: ComponentFixture<PaggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
