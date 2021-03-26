import { TestBed } from '@angular/core/testing';

import { CustomeradminGuard } from './customeradmin.guard';

describe('CustomeradminGuard', () => {
  let guard: CustomeradminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomeradminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
