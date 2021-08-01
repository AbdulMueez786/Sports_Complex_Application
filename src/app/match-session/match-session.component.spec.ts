import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSessionComponent } from './match-session.component';

describe('MatchSessionComponent', () => {
  let component: MatchSessionComponent;
  let fixture: ComponentFixture<MatchSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
