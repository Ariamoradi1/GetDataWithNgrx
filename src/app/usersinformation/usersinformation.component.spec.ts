import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersinformationComponent } from './usersinformation.component';

describe('UsersinformationComponent', () => {
  let component: UsersinformationComponent;
  let fixture: ComponentFixture<UsersinformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersinformationComponent]
    });
    fixture = TestBed.createComponent(UsersinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
