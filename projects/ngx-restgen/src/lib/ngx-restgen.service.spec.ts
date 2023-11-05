import { TestBed } from '@angular/core/testing';

import { NgxRestgenService } from './ngx-restgen.service';

describe('NgxRestgenService', () => {
  let service: NgxRestgenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRestgenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
