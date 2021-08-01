import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePracticeSessionComponent } from './create-practice-session.component';

describe('CreatePracticeSessionComponent', () => {
  let component: CreatePracticeSessionComponent;
  let fixture: ComponentFixture<CreatePracticeSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePracticeSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePracticeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
