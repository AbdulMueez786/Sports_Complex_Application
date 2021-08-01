import { ComponentFixture } from '@angular/core/testing';
import { Player } from './../Model/player';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'app-create-practice-session',
  templateUrl: './create-practice-session.component.html',
  styleUrls: ['./create-practice-session.component.css'],
})
export class CreatePracticeSessionComponent implements OnInit {
  players: any = [];
  couches: any = [];
  usernames: any = [];

  Selected_Player1 = 'Select Player 1';
  Selected_Player2_Tennis = 'Select Player 2';
  Select_Couch_Tennis = 'Select Couch';

  Selected_Player2_TennisTable = 'Select Player 2';
  Select_Couch_TennisTable = 'Select Couch';

  Selected_Player2_Badminton = 'Select Player 2';
  Select_Couch_Badminton = 'Select Couch';

  Selected_Player2_Squash = 'Select Player 2';
  Select_Couch_Squash = 'Select Couch';

  Tennis_Court_name: string = 'Choose Court';
  TennisTable_Court_name: string = 'Choose Court';
  Badminton_Court_name: string = 'Choose Court';
  Squash_Court_name: string = 'Choose Court';

  Tennis_Courts: any = [
    'TenC1',
    'TenC2',
    'TenC3',
    'TenC4',
    'TenC5',
    'TenC6',
    'TenC7',
    'TenC8',
    'TenC9',
    'TenC10',
  ];
  Badminton_Courts: any = [
    'BDM1',
    'BDM2',
    'BDM3',
    'BDM4',
    'BDM5',
    'BDM6',
    'BDM7',
    'BDM8',
  ];
  TennisTable_CourtS: any = [
    'TT1',
    'TT2',
    'TT3',
    'TT4',
    'TT5',
    'TT6',
    'TT7',
    'TT8',
    'TT9',
    'TT10',
    'TT11',
    'TT12',
    'TT13',
    'TT14',
    'TT15',
    'TT16',
    'TT17',
    'TT18',
    'TT19',
    'TT20',
  ];
  Squash_Carts: any = ['Sq1', 'Sq2', 'Sq3', 'Sq4', 'Sq5', 'Sq6', 'Sq7', 'Sq8'];
  show: Boolean = true;
  temp: any;
  schedules: any = [];
  Time: any = [];
  Day: string;
  TennisCourt: string = 'Choose Court';
  BadmintonCourt: string = 'Choose Court';
  TableTennisCourt: string = 'Choose Court';
  SquashCourt: string = 'Choose Court';

  showSession: Boolean = false;
  show_Tennis: boolean = false;
  showtabletennis: boolean = false;
  showsquash: boolean = false;
  showbadminton: boolean = false;
  session: any = [];
  schedule: any = [];
  priority: any = [];
  constructor(private router: Router, public apiService: ApiService) {
    this.apiService.getEmployees().subscribe((data) => {
      this.players = data;
    });
    this.apiService.getcouches().subscribe((data) => {
      this.couches = data;
    });
    this.apiService.getSchedules().subscribe((data) => {
      this.schedule = data;
    });
    this.apiService.getSessions().subscribe((data) => {
      this.session = data;
    });
    this.apiService.getprioriies().subscribe((data) => {
      this.priority = data;
    });
    this.getday();
    this.apiService.player_fully_registered();
  }

  Select(i: any, value: any) {
    if (i == 1) {
      this.TennisCourt = value;
    } else if (i == 2) {
      this.BadmintonCourt = value;
    } else if (i == 3) {
      this.TableTennisCourt = value;
    } else if (i == 4) {
      this.SquashCourt = value;
    }
  }

  DataFilling() {
    console.log(this.apiService.player);
    for (let i of this.apiService.player) {
      console.log(i.First_time_login);
      //if (i.First_time_login == '1') {
      this.players.push(i);
      // }
    }
  }
  refresh() {
    this.showsquash = false;
    this.showtabletennis = false;
    this.show_Tennis = false;
    this.showbadminton = false;
  }
  ngOnInit(): void {}
  s(i: any) {
    this.showSession = true;
    let k = 0;

    this.refresh();

    if (i.rank_tennis != 'choose level') {
      this.show_Tennis = true;
    }
    if (i.rank_badminton != 'choose level') {
      this.showbadminton = true;
    }
    if (i.rank_table_tennis != 'choose level') {
      this.showtabletennis = true;
    }
    if (i.rank_Squash != 'choose level') {
      this.showsquash = true;
    }
    this.Selected_Player1 = i.username;

    for (let i of this.session) {
      //to check if already session of player exist
      if (
        i.Player1_username == i.username ||
        i.Player2_username == i.username
      ) {
        if (i.Game == 'Tennis') {
          this.show_Tennis = false;
        } else if (i.Game == 'TableTennis') {
          this.showtabletennis = false;
        } else if (i.Game == 'Badminton') {
          this.showbadminton = false;
        } else if (i.Game == 'Squash') {
          this.showsquash = false;
        }
      }
    }

    for (let j of this.schedules) {
      if (j.username == i.username) {
        this.Time.push(j.Mon);
        this.Time.push(j.Tue);
        this.Time.push(j.Wed);
        this.Time.push(j.Thu);
        this.Time.push(j.Fri);
        this.Time.push(j.Sat);
      }
      k++;
    }
  }

  cumpare_Priority(p1_username, p2_username, Game) {
    let pri1 = '0',
      pri2 = '0';
    for (let i of this.priority) {
      if (i.username == p2_username) {
        if (
          i.Tennis != 'Set priority' &&
          Game == 'Tennis' &&
          i.Day == this.Day
        ) {
          pri2 = i.Tennis;
        }
        if (
          i.badminton != 'Set priority' &&
          Game == 'badminton' &&
          i.Day == this.Day
        ) {
          pri2 = i.badminton;
        }
        if (
          i.table_tennis != 'Set priority' &&
          Game == 'table_tennis' &&
          i.Day == this.Day
        ) {
          pri2 = i.table_tennis;
        }
        if (
          i.Squash != 'Set priority' &&
          Game == 'Squash' &&
          i.Day == this.Day
        ) {
          pri2 = i.Squash;
        }
      }
      if (i.username == p1_username) {
        if (
          i.Tennis != 'Set priority' &&
          Game == 'Tennis' &&
          i.Day == this.Day
        ) {
          pri1 = i.Tennis;
        }
        if (
          i.badminton != 'Set priority' &&
          Game == 'badminton' &&
          i.Day == this.Day
        ) {
          pri1 = i.badminton;
        }
        if (
          i.table_tennis != 'Set priority' &&
          Game == 'table_tennis' &&
          i.Day == this.Day
        ) {
          pri1 = i.table_tennis;
        }
        if (
          i.Squash != 'Set priority' &&
          Game == 'Squash' &&
          i.Day == this.Day
        ) {
          pri1 = i.Squash;
        }
      }
    }
    console.log('pri1=' + pri1 + 'pri2=' + pri2);
    if (pri1 === pri2 && pri1 != '0' && pri2 != '0') {
      return true;
    }
    console.log('false');
    return false;
  }
  cumpare_schedule(p1_username, p2_username) {
    let T1 = '0',
      T2 = '0';
    for (let i of this.schedule) {
      if (i.username == p1_username) {
        if (this.Day == 'Mon') {
          T1 = i.Mon;
        }
        if (this.Day == 'Tue') {
          T1 = i.Tue;
        }
        if (this.Day == 'Wed') {
          T1 = i.Wed;
        }
        if (this.Day == 'Thu') {
          T1 = i.Thu;
        }
        if (this.Day == 'Fri') {
          T1 = i.Fri;
        }
        if (this.Day == 'Sat') {
          T1 = i.Sat;
        }
      }
      if (i.username == p2_username) {
        if (this.Day == 'Mon') {
          T2 = i.Mon;
        }
        if (this.Day == 'Tue') {
          T2 = i.Tue;
        }
        if (this.Day == 'Wed') {
          T2 = i.Wed;
        }
        if (this.Day == 'Thu') {
          T2 = i.Thu;
        }
        if (this.Day == 'Fri') {
          T2 = i.Fri;
        }
        if (this.Day == 'Sat') {
          T2 = i.Sat;
        }
      }
    }
    console.log(T1);
    console.log(T2);
    if (T1 == T2 && T1 != '0' && T2 != '0') {
      return true;
    }
    return false;
  }
  AvoidSessionDuplication(Game, p_username) {
    for (let i of this.session) {
      if (
        i.Game == Game &&
        i.Day == this.Day &&
        (i.Player1_username == p_username || i.Player2_username == p_username)
      ) {
        return false;
      }
    }
    return true;
  }
  SetPractiseSession() {
    this.showSession = true;
  }

  PractiseSessionCreated(GameChoice) {
    let index;

    if (GameChoice == 1) {
      for (let i of this.players) {
        if (i.username == this.Selected_Player1) {
          if (this.Selected_Player2_Tennis == 'Select Player 2') {
            this.Selected_Player2_Tennis = this.Select_Couch_Tennis;
          }

          this.show_Tennis = false;
          index = this.players.findIndex((x) => x.username === i.username);
          //this.players.splice(index, 1);
          let Session = {
            SessionNo: '',
            Game: 'Tennis',
            Player1_username: this.Selected_Player1,
            Player2_username: this.Selected_Player2_Tennis,
            Player1_Ranking: 'Not added by coach',
            Player2_Ranking: 'Not added by coach',
            Result: '_',
            Game_Court: this.TennisCourt,
            Game_Time: '_',
            Couch_username: this.Select_Couch_Tennis,
            p1_attendence: '_',
            p2_attendence: '_',
            DAY: this.Day,
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
      }
    } else if (GameChoice == 2) {
      for (let i of this.players) {
        if (i.username == this.Selected_Player1) {
          if (this.Selected_Player2_TennisTable == 'Select Player 2') {
            this.Selected_Player2_TennisTable = this.Select_Couch_TennisTable;
          }
          this.showtabletennis = false;
          index = this.players.findIndex((x) => x.username === i.username);
          //this.players.splice(index, 1);
          let Session = {
            SessionNo: '',
            Game: 'TableTennis',
            Player1_username: this.Selected_Player1,
            Player2_username: this.Selected_Player2_TennisTable,
            Player1_Ranking: 'Not added by coach',
            Player2_Ranking: 'Not added by coach',
            Result: '_',
            Game_Court: this.TennisTable_CourtS,
            Game_Time: '_',
            Couch_username: this.Select_Couch_TennisTable,
            p1_attendence: '_',
            p2_attendence: '_',
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
      }
    } else if (GameChoice == 3) {
      for (let i of this.players) {
        if (i.username == this.Selected_Player1) {
          if (this.Selected_Player2_Badminton == 'Select Player 2') {
            this.Selected_Player2_Badminton = this.Select_Couch_Badminton;
          }
          this.showbadminton = false;
          index = this.players.findIndex((x) => x.username === i.username);
          //this.players.splice(index, 1);
          let Session = {
            SessionNo: '',
            Game: 'Badminton',
            Player1_username: this.Selected_Player1,
            Player2_username: this.Selected_Player2_Badminton,
            Player1_Ranking: 'Not added by coach',
            Player2_Ranking: 'Not added by coach',
            Result: '_',
            Game_Court: this.BadmintonCourt,
            Game_Time: '_',
            Couch_username: this.Select_Couch_Badminton,
            p1_attendence: '_',
            p2_attendence: '_',
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
      }
    } else if (GameChoice == 4) {
      for (let i of this.players) {
        if (i.username == this.Selected_Player1) {
          if (this.Selected_Player2_Squash == 'Select Player 2') {
            this.Selected_Player2_Squash = this.Select_Couch_Squash;
          }
          this.showsquash = false;
          index = this.players.findIndex((x) => x.username === i.username);
          //this.players.splice(index, 1);
          let Session = {
            SessionNo: '',
            Game: 'Squash',
            Player1_username: this.Selected_Player1,
            Player2_username: this.Selected_Player2_Squash,
            Player1_Ranking: 'Not added by coach',
            Player2_Ranking: 'Not added by coach',
            Result: '_',
            Game_Court: this.SquashCourt,
            Game_Time: '_',
            Couch_username: this.Select_Couch_Squash,
            p1_attendence: '_',
            p2_attendence: '_',
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
      }
    }

    if (
      this.show_Tennis == false &&
      this.showtabletennis == false &&
      this.showbadminton == false &&
      this.showsquash == false
    ) {
      this.showSession = false;
    }
  }
  getday() {
    var d = new Date();
    var n = d.getDay();
    if (n == 1) {
      this.Day = 'Mon';
    } else if (n == 2) {
      this.Day = 'Tue';
    } else if (n == 3) {
      this.Day = 'Wed';
    } else if (n == 4) {
      this.Day = 'Thu';
    } else if (n == 5) {
      this.Day = 'Fri';
    } else if (n == 6) {
      this.Day = 'Sat';
    } else {
      this.Day = 'Sun';
    }
  }
  seec(username: string, Player_No: Number, GameeNo) {
    if (GameeNo == 1) {
      if (Player_No == 1) {
        this.Selected_Player1 = username;
      } else if (Player_No == 2) {
        this.Selected_Player2_Tennis = username;
      } else if (Player_No == 3) {
        this.Select_Couch_Tennis = username;
      }
    } else if (GameeNo == 2) {
      if (Player_No == 1) {
        this.Selected_Player1 = username;
      } else if (Player_No == 2) {
        this.Selected_Player2_TennisTable = username;
      } else if (Player_No == 3) {
        this.Select_Couch_TennisTable = username;
      }
    } else if (GameeNo == 3) {
      if (Player_No == 1) {
        this.Selected_Player1 = username;
      } else if (Player_No == 2) {
        this.Selected_Player2_Badminton = username;
      } else if (Player_No == 3) {
        this.Select_Couch_Badminton = username;
      }
    } else if (GameeNo == 4) {
      if (Player_No == 1) {
        this.Selected_Player1 = username;
      } else if (Player_No == 2) {
        this.Selected_Player2_Squash = username;
      } else if (Player_No == 3) {
        this.Select_Couch_Squash = username;
      }
    }
  }
}
