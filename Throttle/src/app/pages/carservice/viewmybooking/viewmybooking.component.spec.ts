import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmybookingComponent } from './viewmybooking.component';

describe('ViewmybookingComponent', () => {
  let component: ViewmybookingComponent;
  let fixture: ComponentFixture<ViewmybookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmybookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
