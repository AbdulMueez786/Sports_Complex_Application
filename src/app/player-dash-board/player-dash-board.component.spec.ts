import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDashBoardComponent } from './player-dash-board.component';

describe('PlayerDashBoardComponent', () => {
  let component: PlayerDashBoardComponent;
  let fixture: ComponentFixture<PlayerDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
