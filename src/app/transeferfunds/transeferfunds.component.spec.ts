import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranseferfundsComponent } from './transeferfunds.component';

describe('TranseferfundsComponent', () => {
  let component: TranseferfundsComponent;
  let fixture: ComponentFixture<TranseferfundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranseferfundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranseferfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
