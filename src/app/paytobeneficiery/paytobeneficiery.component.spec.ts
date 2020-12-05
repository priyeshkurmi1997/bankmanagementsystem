import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytobeneficieryComponent } from './paytobeneficiery.component';

describe('PaytobeneficieryComponent', () => {
  let component: PaytobeneficieryComponent;
  let fixture: ComponentFixture<PaytobeneficieryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytobeneficieryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytobeneficieryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
