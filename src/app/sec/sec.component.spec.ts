import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecComponent } from './sec.component';

describe('SecComponent', () => {
  let component: SecComponent;
  let fixture: ComponentFixture<SecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecComponent]
    });
    fixture = TestBed.createComponent(SecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
