import { TestBed } from '@angular/core/testing';

import { ValuesMenuService } from './values-menu.service';

describe('ValuesMenuService', () => {
  let service: ValuesMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValuesMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
