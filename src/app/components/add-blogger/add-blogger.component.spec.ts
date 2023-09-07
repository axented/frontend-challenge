import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloggerComponent } from './add-blogger.component';

describe('AddBloggerComponent', () => {
  let component: AddBloggerComponent;
  let fixture: ComponentFixture<AddBloggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBloggerComponent]
    });
    fixture = TestBed.createComponent(AddBloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
