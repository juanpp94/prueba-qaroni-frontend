import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsdetailComponent } from './groupsdetail.component';

describe('GroupsdetailComponent', () => {
  let component: GroupsdetailComponent;
  let fixture: ComponentFixture<GroupsdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupsdetailComponent]
    });
    fixture = TestBed.createComponent(GroupsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
