import { TestBed } from '@angular/core/testing';

import { EmployeeadminGuard } from './employeeadmin.guard';

describe('EmployeeadminGuard', () => {
  let guard: EmployeeadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
