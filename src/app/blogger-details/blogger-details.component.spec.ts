import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerDetailsComponent } from './blogger-details.component';

describe('BloggerDetailsComponent', () => {
  let component: BloggerDetailsComponent;
  let fixture: ComponentFixture<BloggerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloggerDetailsComponent]
    });
    fixture = TestBed.createComponent(BloggerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
