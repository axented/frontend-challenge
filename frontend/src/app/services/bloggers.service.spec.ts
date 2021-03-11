import { TestBed } from '@angular/core/testing';

import { BloggersService } from './bloggers.service';

describe('BloggersService', () => {
  let service: BloggersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloggersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
