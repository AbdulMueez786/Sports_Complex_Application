import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMatchComponent } from './set-match.component';

describe('SetMatchComponent', () => {
  let component: SetMatchComponent;
  let fixture: ComponentFixture<SetMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
