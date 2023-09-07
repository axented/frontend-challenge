import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggersListComponent } from './bloggers-list.component';

describe('BloggersListComponent', () => {
  let component: BloggersListComponent;
  let fixture: ComponentFixture<BloggersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloggersListComponent]
    });
    fixture = TestBed.createComponent(BloggersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
