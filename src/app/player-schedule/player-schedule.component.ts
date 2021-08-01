import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-player-schedule',
  templateUrl: './player-schedule.component.html',
  styleUrls: ['./player-schedule.component.css'],
})
export class PlayerScheduleComponent implements OnInit {
  @Input() found: boolean;
  Day: string = 'select';
  Game: string;
  player: any;
  sessions: any = [];
  schedules: any = [];
  T1: string = '_';
  T2: string = '_';
  T3: string = '_';
  T4: string = '_';
  //different day schedules
  DaySchedule: any;
  MonSchedule: any;
  TueSchedule: any;
  WedSchedule: any;
  ThuSchedule: any;
  FriSchedule: any;
  SatSchedule: any;
  priority: any = [];
  constructor(private router: Router, public apiService: ApiService) {
    this.apiService.getSessions().subscribe((data) => {
      this.sessions = data;
    });
    this.player = this.apiService.player;

    this.apiService.getSchedules().subscribe((data) => {
      this.schedules = data;
    });
    this.apiService.getprioriies().subscribe((data) => {
      this.priority = data;
    });
  }
  ngOnInit(): void {
    console.log(this.player);
  }
  f() {
    this.T1 = '_';
    this.T2 = '_';
    this.T3 = '_';
    this.T4 = '_';
    for (let i of this.priority) {
      if (
        i.username === this.apiService.username_Player &&
        this.Day === i.Day
      ) {
        if (i.Tennis == '1') {
          this.T1 = 'Tennis';
        } else if (i.badminton == '1') {
          this.T1 = 'Badminton';
        } else if (i.table_tennis == '1') {
          this.T1 = 'Table Tennis';
        } else if (i.Squash == '1') {
          this.T1 = 'Squash';
        }

        if (i.Tennis == '2') {
          this.T2 = 'Tennis';
        } else if (i.badminton == '2') {
          this.T2 = 'Badminton';
        } else if (i.table_tennis == '2') {
          this.T2 = 'Table Tennis';
        } else if (i.Squash == '2') {
          this.T2 = 'Squash';
        }

        if (i.Tennis == '3') {
          this.T3 = 'Tennis';
        } else if (i.badminton == '3') {
          this.T3 = 'Badminton';
        } else if (i.table_tennis == '3') {
          this.T3 = 'Table Tennis';
        } else if (i.Squash == '3') {
          this.T3 = 'Squash';
        }
        if (i.Tennis == '4') {
          this.T3 = 'Tennis';
        } else if (i.badminton == '4') {
          this.T3 = 'Badminton';
        } else if (i.table_tennis == '4') {
          this.T3 = 'Table Tennis';
        } else if (i.Squash == '4') {
          this.T3 = 'Squash';
        }
      }
    }
  }
  showMonday() {
    this.Day = 'Mon';
    this.f();

    for (let s of this.schedules) {
      if (this.apiService.username_Player === s.username) {
        console.log('ye to hoga');
        this.DaySchedule = s.Mon;
      }
    }
  }

  showTuesday() {
    this.Day = 'Tue';
    this.f();

    for (let s of this.schedules) {
      if (this.apiService.username_Player === s.username) {
        console.log('ye to hoga');
        this.DaySchedule = s.Tue;
      }
    }
  }

  showWednesday() {
    this.Day = 'Wed';
    this.f();

    for (let s of this.schedules) {
      if (this.apiService.username_Player === s.username) {
        console.log('ye to hoga');
        this.DaySchedule = s.Wed;
      }
    }
  }

  showThursday() {
    this.Day = 'Thu';
    this.f();

    for (let s of this.schedules) {
      if (this.apiService.username_Player === s.username) {
        console.log('ye to hoga');
        this.DaySchedule = s.Thu;
      }
    }
  }

  showFriday() {
    this.Day = 'Fri';
    this.f();

    for (let s of this.schedules) {
      if (this.apiService.username_Player === s.username) {
        console.log('ye to hoga');
        this.DaySchedule = s.Fri;
      }
    }
  }

  showSaturday() {
    this.Day = 'Sat';
    this.f();
    for (let s of this.schedules) {
      if (this.apiService.username_Player === s.username) {
        console.log('ye to hoga');
        this.DaySchedule = s.Sat;
      }
    }
  }
}
