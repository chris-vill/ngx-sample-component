import { TestBed } from '@angular/core/testing';

import { NgxSampleComponentService } from './ngx-sample-component.service';

describe('NgxSampleComponentService', () => {
  let service: NgxSampleComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSampleComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
