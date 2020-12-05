import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAllCustomerComponent } from './fetch-all-customer.component';

describe('FetchAllCustomerComponent', () => {
  let component: FetchAllCustomerComponent;
  let fixture: ComponentFixture<FetchAllCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchAllCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchAllCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
