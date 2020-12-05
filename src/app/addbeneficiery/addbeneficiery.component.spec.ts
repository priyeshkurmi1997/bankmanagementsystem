import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbeneficieryComponent } from './addbeneficiery.component';

describe('AddbeneficieryComponent', () => {
  let component: AddbeneficieryComponent;
  let fixture: ComponentFixture<AddbeneficieryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbeneficieryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbeneficieryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
