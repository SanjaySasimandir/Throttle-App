import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessbookingComponent } from './processbooking.component';

describe('ProcessbookingComponent', () => {
  let component: ProcessbookingComponent;
  let fixture: ComponentFixture<ProcessbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
