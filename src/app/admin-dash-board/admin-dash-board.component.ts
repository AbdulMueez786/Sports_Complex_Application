import { Component, OnInit } from '@angular/core';
import { CreatePracticeSessionComponent } from '../create-practice-session/create-practice-session.component';
import { ApiService } from '../service/api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css'],
})
export class AdminDashBoardComponent implements OnInit {
  showplayer: boolean = false;
  showcouches: boolean = false;
  showgames: boolean = false;
  showpractisesession: boolean = false;
  showmatches: boolean = false;
  show: boolean = true;
  showpractice: boolean = false;
  players: any = [];
  couches: any = [];
  sessions: any = [];
  Edit_player_username: string = '';
  Edit_player_password: string = '';
  Edit_player_email: string = '';
  Edit_player_Tennis: string = '';
  Edit_player_Badminton: string = '';
  Edit_player_Table_Tennis: string = '';
  Edit_Player_Squash: string = '';
  Edit_player_level_Tennis: string = 'choose level';
  Edit_player_level_Badminton: string = 'choose level';
  Edit_player_level_Table_Tennis: string = 'choose level';
  Edit_player_level_Squash: string = 'choose level';
  u: any;
  u2: any;
  Flag: boolean;
  couchname: string = '';
  couchpassword: string = '';
  Couch_Flag: boolean;
  matchflag: boolean = false;
  matches: any = [];
  constructor(public apiService: ApiService) {
    this.apiService.getEmployees().subscribe((data) => {
      this.players = data;
    });
    this.apiService.getcouches().subscribe((data) => {
      this.couches = data;
    });
    this.apiService.getSessions().subscribe((data) => {
      this.sessions = data;
    });
    this.apiService.getmatches().subscribe((data) => {
      this.matches = data;
    });
  }
  CreateMatch() {
    this.matchflag = true;
    this.showplayer = false;
    this.showcouches = false;
    this.showgames = false;
    this.showmatches = false;
    this.showpractisesession = false;
    this.show = false;
    this.showpractice = false;
    this.apiService.player_fully_registered();
  }
  filling_data() {
    this.apiService.getEmployees().subscribe((data) => {
      this.players = data;
    });
  }
  filling_data_couches() {
    this.apiService.getcouches().subscribe((data) => {
      this.couches = data;
    });
  }

  EDIT_player_level_Tennis(level: string) {
    this.Edit_player_level_Tennis = level;
  }
  EDIT_player_level_Badminton(level: string) {
    this.Edit_player_level_Badminton = level;
  }
  EDIT_player_level_Table_Tennis(level: string) {
    this.Edit_player_level_Table_Tennis = level;
  }
  EDIT_player_level_Squash(level: string) {
    this.Edit_player_level_Squash = level;
  }

  Change_Couch_name(username: string) {
    this.couchname = username;
  }

  Change_Couch_password(password: string) {
    this.couchpassword = password;
  }
  onRemoveCouch(i: any, index: any) {
    this.apiService.deleteCouche(i._id).subscribe((data) => {
      this.couches.splice(index, 1);
    });
  }
  Edit_Couch(i: any) {
    this.Couch_Flag = true;
    this.couchname = i.username;
    this.couchpassword = i.password;
    this.u2 = i.username;
  }
  Create_Couch() {
    this.Couch_Flag = false;
    this.couchname = '';
    this.couchpassword = '';
  }
  Couch_Done() {
    if (this.Couch_Flag == true) {
      for (let i of this.couches) {
        if (i.username == this.u2) {
          let index = this.couches.findIndex((x) => x.username === i.username);
          this.apiService.deleteCouche(i._id).subscribe((data) => {
            this.couches.splice(index, 1);
          });
        }
      }
    }
    let COUCH = {
      username: this.couchname,
      password: this.couchpassword,
      Game: '_',
    };
    this.apiService.createCouches(COUCH).subscribe(
      (res) => {
        console.log('Couch successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );

    this.couchname = '';
    this.couchpassword = '';
    this.filling_data_couches();
  }
  DoneNotification(i: any) {
    let index = this.apiService.notification.findIndex((x) => x._id === i._id);

    this.apiService.deleteNotification(i._id).subscribe(
      (res) => {
        this.apiService.notification.splice(index, 1);
        console.log('Employee successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  Done() {
    if (this.Flag == true) {
      let player = {
        username: this.Edit_player_username,
        password: this.Edit_player_password,
        email: this.Edit_player_email,
        rank_tennis: this.Edit_player_level_Tennis,
        rank_badminton: this.Edit_player_level_Badminton,
        rank_table_tennis: this.Edit_player_level_Table_Tennis,
        rank_Squash: this.Edit_player_level_Squash,
        First_time_login: '0',
        openent_rank_tennis: '0',
        openent_rank_badminton: '0',
        openent_rank_table_tennis: '0',
        openent_rank_table_Squash: '0',
      };
      this.players.push(player);
      //Create Player
      this.apiService.createEmployee(player).subscribe(
        (res) => {
          console.log('Employee successfully created!');
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (this.Flag == false) {
      //Edit Player
      let index = 0;
      let player = {
        username: this.Edit_player_username,
        password: this.Edit_player_password,
        email: this.Edit_player_email,
        rank_tennis: this.Edit_player_level_Tennis,
        rank_badminton: this.Edit_player_level_Badminton,
        rank_table_tennis: this.Edit_player_level_Table_Tennis,
        rank_Squash: this.Edit_player_level_Squash,
        First_time_login: '0',
        openent_rank_tennis: '0',
        openent_rank_badminton: '0',
        openent_rank_table_tennis: '0',
        openent_rank_table_Squash: '0',
      };
      for (let i of this.players) {
        if (i.username == this.u.username) {
          index = this.players.findIndex((x) => x.username === i.username);
          this.apiService.deleteEmployee(i._id).subscribe((data) => {
            this.players.splice(index, 1);
          });
        }
      }
      this.apiService.createEmployee(player).subscribe(
        (res) => {
          console.log('Employee successfully created!');
        },
        (error) => {
          console.log(error);
        }
      );
    }
    this.Edit_player_username = '';
    this.Edit_player_password = '';
    this.Edit_player_email = '';
    this.Edit_player_level_Tennis = 'choose level';
    this.Edit_player_level_Badminton = 'choose level';
    this.Edit_player_level_Table_Tennis = 'choose level';
    this.Edit_player_level_Squash = 'choose level';
    this.Edit_player_Tennis = '';
    this.Edit_player_Badminton = '';
    this.Edit_player_Table_Tennis = '';
    this.Edit_Player_Squash = '';
    this.u = null;
    this.filling_data();
  }

  onRemove(i: any, index: any) {
    this.apiService.deleteEmployee(i._id).subscribe((data) => {
      this.players.splice(index, 1);
    });
  }

  onEdit(i: any) {
    console.log(i.username);
    console.log(i.password);
    console.log(i.email);
    this.u = i;
    this.Edit_player_username = i.username;
    this.Edit_player_password = i.password;
    this.Edit_player_email = i.email;
    this.Edit_player_level_Tennis = i.rank_tennis;
    this.Edit_player_level_Badminton = i.rank_badminton;
    this.Edit_player_level_Table_Tennis = i.rank_table_tennis;
    this.Edit_player_level_Squash = i.rank_Squash;
    this.Flag = false;
  }
  onCreate() {
    this.Flag = true;
    this.Edit_player_username = '';
    this.Edit_player_password = '';
    this.Edit_player_email = '';
    this.Edit_player_level_Tennis = 'choose level';
    this.Edit_player_level_Badminton = 'choose level';
    this.Edit_player_level_Table_Tennis = 'choose level';
    this.Edit_player_level_Squash = 'choose level';
  }
  ShowPlayers() {
    this.showplayer = true;
    this.showcouches = false;
    this.showgames = false;
    this.showmatches = false;
    this.showpractisesession = false;
    this.show = false;
    this.showpractice = false;
  }
  ShowCouches() {
    this.showplayer = false;
    this.showcouches = true;
    this.showgames = false;
    this.showmatches = false;
    this.showpractisesession = false;
    this.show = false;
    this.showpractice = false;
  }
  ShowGames() {
    this.showplayer = false;
    this.showcouches = false;
    this.showgames = true;
    this.showmatches = false;
    this.showpractisesession = false;
    this.show = false;
    this.showpractice = false;
  }
  ShowMatches() {
    this.showplayer = false;
    this.showcouches = false;
    this.showgames = false;
    this.showmatches = true;
    this.showpractisesession = false;
    this.show = false;
    this.showpractice = false;
    this.matchflag = false;
  }
  ShowPractiseSession() {
    this.showplayer = false;
    this.showcouches = false;
    this.showgames = false;
    this.showmatches = false;
    this.showpractisesession = true;
    this.show = false;
    this.showpractice = false;
    this.apiService.getSessions().subscribe((data) => {
      this.sessions = data;
    });
  }

  ShowPractice() {
    this.showplayer = false;
    this.showcouches = false;
    this.showgames = false;
    this.showmatches = false;
    this.showpractisesession = false;
    this.show = false;
    this.showpractice = true;
    this.apiService.player_fully_registered();
  }

  ngOnInit(): void {}
}
