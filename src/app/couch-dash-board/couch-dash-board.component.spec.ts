import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchDashBoardComponent } from './couch-dash-board.component';

describe('CouchDashBoardComponent', () => {
  let component: CouchDashBoardComponent;
  let fixture: ComponentFixture<CouchDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouchDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
