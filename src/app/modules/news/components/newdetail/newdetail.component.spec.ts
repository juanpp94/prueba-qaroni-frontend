import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdetailComponent } from './newdetail.component';

describe('NewdetailComponent', () => {
  let component: NewdetailComponent;
  let fixture: ComponentFixture<NewdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewdetailComponent]
    });
    fixture = TestBed.createComponent(NewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
