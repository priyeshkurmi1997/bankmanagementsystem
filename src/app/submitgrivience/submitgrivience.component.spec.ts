import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitgrivienceComponent } from './submitgrivience.component';

describe('SubmitgrivienceComponent', () => {
  let component: SubmitgrivienceComponent;
  let fixture: ComponentFixture<SubmitgrivienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitgrivienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitgrivienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
