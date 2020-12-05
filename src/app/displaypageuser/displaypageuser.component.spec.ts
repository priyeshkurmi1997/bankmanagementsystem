import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypageuserComponent } from './displaypageuser.component';

describe('DisplaypageuserComponent', () => {
  let component: DisplaypageuserComponent;
  let fixture: ComponentFixture<DisplaypageuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypageuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypageuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
