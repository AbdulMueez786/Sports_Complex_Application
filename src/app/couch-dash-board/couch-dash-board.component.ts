import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-couch-dash-board',
  templateUrl: './couch-dash-board.component.html',
  styleUrls: ['./couch-dash-board.component.css'],
})
export class CouchDashBoardComponent implements OnInit {
  show: boolean = true;
  showmatches: boolean = false;
  showpractisesession: boolean = false;
  sessions: any = [];
  p1_raking: string;
  p2_ranking: string;
  Result: string;
  u: any;
  store: any;
  matches: any = [];
  Player1_Attendence: string = '';
  Player2_Attendence: string = '';
  constructor(private router: Router, public apiService: ApiService) {
    this.apiService.getSessions().subscribe((data) => {
      this.sessions = data;
    });
    this.apiService.getmatches().subscribe((data) => {
      this.matches = data;
    });
  }
  StoreObj(i: any) {
    this.store = i;
  }
  Matches() {
    let match = {
      Game: this.store.Game,
      Player1_username: this.store.Player1_username,
      Player2_username: this.store.Player2_username,
      Player1_Ranking: this.p1_raking,
      Player2_Ranking: this.p2_ranking,
      p1_attendence: this.Player1_Attendence,
      p2_attendence: this.Player2_Attendence,
      Result: this.Result,
      Game_Court: this.store.Game_Court,
      Game_Time: this.store.Game_Time,
      Couch_username: this.store.Couch_username,
      DAY: this.store.Day,
    };
    let index = this.matches.findIndex((x) => x._id === this.store._id);
    this.apiService.deleteMatch(this.store._id).subscribe((data) => {
      this.matches.splice(index, 1);
    });
    this.apiService.createMatch(match).subscribe(
      (res) => {
        console.log('Match successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
    this.matches = [];
    this.apiService.getmatches().subscribe((data) => {
      this.matches = data;
    });
  }
  refreshdata() {
    this.apiService.getSessions().subscribe((data) => {
      this.sessions = data;
    });
  }
  Setattendence(attendance, player) {
    console.log(attendance);
    console.log(player);
    if (player == 'p1') {
      this.Player1_Attendence = attendance;
    } else if (player == 'p2') {
      this.Player2_Attendence = attendance;
    }
  }
  Done() {
    let i = this.u;
    if (this.p1_raking != ' ' && this.p2_ranking != '' && this.Result != '') {
      let index = this.sessions.findIndex((x) => x.username === i.username);
      this.apiService.deleteSessions(i._id).subscribe((data) => {
        this.sessions.splice(index, 1);
      });
      let Session = {
        SessionNo: i.SessionNo,
        Game: i.Game,
        Player1_username: i.Player1_username,
        Player2_username: i.Player2_username,
        Player1_Ranking: this.p1_raking,
        Player2_Ranking: this.p2_ranking,
        Result: this.Result,
        Couch_username: i.Couch_username,
        p1_attendence: this.Player1_Attendence,
        p2_attendence: this.Player2_Attendence,
      };
      this.apiService.createSession(Session).subscribe(
        (res) => {
          console.log('Couch successfully created!');
        },
        (error) => {
          console.log(error);
        }
      );
    }
    this.refreshdata();
  }
  change(i: any) {
    this.u = i;
    this.p1_raking = '';
    this.p2_ranking = '';
  }
  ShowMatches() {
    this.show = false;
    this.showmatches = true;
    this.showpractisesession = false;
  }
  ShowPractiseSession() {
    this.show = false;
    this.showmatches = false;
    this.showpractisesession = true;
  }
  ngOnInit(): void {}
}
