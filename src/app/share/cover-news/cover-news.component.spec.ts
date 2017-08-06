import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverNewsComponent } from './cover-news.component';

describe('CoverNewsComponent', () => {
  let component: CoverNewsComponent;
  let fixture: ComponentFixture<CoverNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
