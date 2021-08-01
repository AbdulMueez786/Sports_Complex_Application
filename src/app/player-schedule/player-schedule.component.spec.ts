import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScheduleComponent } from './player-schedule.component';

describe('PlayerScheduleComponent', () => {
  let component: PlayerScheduleComponent;
  let fixture: ComponentFixture<PlayerScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
