//import { Player } from './../Model/player';
import { Router } from '@angular/router';

import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../service/api.service';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  selection: string = '';
  admin_state: boolean = false;
  player_state: boolean = false;
  couch_state: boolean = false;
  username: string = '';
  password: string = '';
  email: string = '';
  player: any = [];
  Badminton: string;
  Tennis: string;
  Table_Tennis: string;
  Squash: string;
  player_level_Tennis: string = 'choose level';
  player_level_Badminton: string = 'choose level';
  player_level_Table_Tennis: string = 'choose level';
  player_level_Squash: string = 'choose level';

  constructor(
    private router: Router, //  private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.apiService.getEmployees().subscribe((data) => {
      this.player = data;
    });
  }
  Set_player_level_Tennis(level: string) {
    if (this.Tennis == '1') {
      this.player_level_Tennis = level;
    } else {
      alert('please first choose this game');
    }
  }
  Set_player_level_Badminton(level: string) {
    if (this.Badminton == '1') {
      this.player_level_Badminton = level;
    } else {
      alert('please first choose this game');
    }
  }
  Set_player_level_Table_Tennis(level: string) {
    if (this.Table_Tennis == '1') {
      this.player_level_Table_Tennis = level;
    } else {
      alert('please first choose this game');
    }
  }
  Set_player_level_Squash(level: string) {
    if (this.Squash == '1') {
      this.player_level_Squash = level;
    } else {
      alert('please first choose this game');
    }
  }
  admin_state_setter() {
    this.admin_state = true;
    this.couch_state = false;
    this.player_state = false;
  }
  couch_state_setter() {
    this.admin_state = false;
    this.couch_state = true;
    this.player_state = false;
  }
  player_state_setter() {
    this.admin_state = false;
    this.couch_state = false;
    this.player_state = true;
  }
  Submit() {
    if (
      this.Tennis == '1' ||
      this.Badminton == '1' ||
      this.Table_Tennis == '1' ||
      this.Squash == '1'
    ) {
      if (this.username != '' && this.password != '' && this.email != '') {
        let player = {
          username: this.username,
          password: this.password,
          email: this.email,
          rank_tennis: this.player_level_Tennis,
          rank_badminton: this.player_level_Badminton,
          rank_table_tennis: this.player_level_Table_Tennis,
          rank_Squash: this.player_level_Squash,
          First_time_login: '0',
          openent_rank_tennis: '0',
          openent_rank_badminton: '0',
          openent_rank_table_tennis: '0',
          openent_rank_table_Squash: '0',
        };
        let flag = false;
        for (let i of this.player) {
          if (i.username == player.username) {
            flag = true;
          }
        }
        if (flag != true) {
          this.apiService.createEmployee(player).subscribe(
            (res) => {
              console.log('Employee successfully created!');
            },
            (error) => {
              console.log(error);
            }
          );
          this.router.navigate(['./']);
        } else {
          alert('wrong input');
        }
      } else {
        alert('incomplete information');
      }
    } else {
      alert('please select any game');
    }
    this.filling_data();
  }
  filling_data() {
    this.apiService.getEmployees().subscribe((data) => {
      this.apiService.player = data;
    });
  }
  ngOnInit(): void {}
}
