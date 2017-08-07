import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSigninComponent } from './mentor-signin.component';

describe('MentorSigninComponent', () => {
  let component: MentorSigninComponent;
  let fixture: ComponentFixture<MentorSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
