import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNewsItemComponent } from './side-news-item.component';

describe('SideNewsItemComponent', () => {
  let component: SideNewsItemComponent;
  let fixture: ComponentFixture<SideNewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
