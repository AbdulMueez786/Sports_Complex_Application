import { Player } from './../Model/player';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';
import { PracticeSessionComponent } from '../practice-session/practice-session.component';
@Component({
  selector: 'app-player-dash-board',
  templateUrl: './player-dash-board.component.html',
  styleUrls: ['./player-dash-board.component.css'],
})
export class PlayerDashBoardComponent implements OnInit {
  Mon: string = '';
  Tue: string = '';
  Wed: string = '';
  Thu: string = '';
  Fri: string = '';
  Sat: string = '';
  show: boolean = true;
  showSchedule: boolean = false;
  showMatch: boolean = false;
  showPerformance: boolean = false;
  player_level_Tennis: string = 'choose level';
  player_level_Badminton: string = 'choose level';
  player_level_Table_Tennis: string = 'choose level';
  player_level_Squash: string = 'choose level';
  First_time_login: number = 1;
  openent_rank_tennis: string = 'choose oppenent level';
  openent_rank_badminton: string = 'choose oppenent level';
  openent_rank_table_tennis: string = 'choose oppenent level';
  openent_rank_table_Squash: string = 'choose oppenent level';
  player: any = [];
  playername: string;
  found: boolean = false;
  //priority variables:
  Mon_Tennis_Priority: string = 'Set priority';
  Mon_Badminton_Priority: string = 'Set priority';
  Mon_Table_Tennis_Priority: string = 'Set priority';
  Mon_Squash_Priority: string = 'Set priority';
  Tue_Tennis_Priority: string = 'Set priority';
  Tue_Badminton_Priority: string = 'Set priority';
  Tue_Table_Tennis_Priority: string = 'Set priority';
  Tue_Squash_Priority: string = 'Set priority';
  Wed_Tennis_Priority: string = 'Set priority';
  Wed_Badminton_Priority: string = 'Set priority';
  Wed_Table_Tennis_Priority: string = 'Set priority';
  Wed_Squash_Priority: string = 'Set priority';
  Thu_Tennis_Priority: string = 'Set priority';
  Thu_Badminton_Priority: string = 'Set priority';
  Thu_Table_Tennis_Priority: string = 'Set priority';
  Thu_Squash_Priority: string = 'Set priority';
  Fri_Tennis_Priority: string = 'Set priority';
  Fri_Badminton_Priority: string = 'Set priority';
  Fri_Table_Tennis_Priority: string = 'Set priority';
  Fri_Squash_Priority: string = 'Set priority';
  Sat_Tennis_Priority: string = 'Set priority';
  Sat_Badminton_Priority: string = 'Set priority';
  Sat_Table_Tennis_Priority: string = 'Set priority';
  Sat_Squash_Priority: string = 'Set priority';
  sessions: any = [];
  matches: any = [];
  notification_flag: boolean = false;
  constructor(private router: Router, public apiService: ApiService) {
    this.apiService.getSessions().subscribe((data) => {
      this.sessions = data;
    });

    this.apiService.getmatches().subscribe((data) => {
      this.matches = data;
    });
    console.log('con');
    this.player = this.apiService.player;
    this.s();
  }

  Set_Priority_Tennis(priority: string, day: string) {
    if (day == 'Mon') {
      this.Mon_Tennis_Priority = priority;
    } else if (day == 'Tue') {
      this.Tue_Tennis_Priority = priority;
    } else if (day == 'Wed') {
      this.Wed_Tennis_Priority = priority;
    } else if (day == 'Thu') {
      this.Thu_Tennis_Priority = priority;
    } else if (day == 'Fri') {
      this.Fri_Tennis_Priority = priority;
    } else if (day == 'Sat') {
      this.Sat_Tennis_Priority = priority;
    }
  }
  Set_Priority_Badminton(priority: string, day: string) {
    if (day == 'Mon') {
      this.Mon_Badminton_Priority = priority;
    } else if (day == 'Tue') {
      this.Tue_Badminton_Priority = priority;
    } else if (day == 'Wed') {
      this.Wed_Badminton_Priority = priority;
    } else if (day == 'Thu') {
      this.Thu_Badminton_Priority = priority;
    } else if (day == 'Fri') {
      this.Fri_Badminton_Priority = priority;
    } else if (day == 'Sat') {
      this.Sat_Badminton_Priority = priority;
    }
  }
  Set_Priority_Table_Tennis(priority: string, day: string) {
    if (day == 'Mon') {
      this.Mon_Table_Tennis_Priority = priority;
    } else if (day == 'Tue') {
      this.Tue_Table_Tennis_Priority = priority;
    } else if (day == 'Wed') {
      this.Wed_Table_Tennis_Priority = priority;
    } else if (day == 'Thu') {
      this.Thu_Table_Tennis_Priority = priority;
    } else if (day == 'Fri') {
      this.Fri_Table_Tennis_Priority = priority;
    } else if (day == 'Sat') {
      this.Sat_Table_Tennis_Priority = priority;
    }
  }
  Set_Priority_Squash(priority: string, day: string) {
    if (day == 'Mon') {
      this.Mon_Squash_Priority = priority;
    } else if (day == 'Tue') {
      this.Tue_Squash_Priority = priority;
    } else if (day == 'Wed') {
      this.Wed_Squash_Priority = priority;
    } else if (day == 'Thu') {
      this.Thu_Squash_Priority = priority;
    } else if (day == 'Fri') {
      this.Fri_Squash_Priority = priority;
    } else if (day == 'Sat') {
      this.Sat_Squash_Priority = priority;
    }
  }

  Set_openent_player_level_Tennis(level: string) {
    // if (this.openent_rank_tennis == 'choose oppenent level') {
    this.openent_rank_tennis = level;
    // } else {
    //    alert('please choose level of opponent');
    //  }
  }
  Set_openent_player_level_Badminton(level: string) {
    // if (this.openent_rank_badminton == 'choose oppenent level') {
    this.openent_rank_badminton = level;
    // } else {
    //  alert('please choose level of opponent');
    // }
  }
  Set_openent_player_level_Table_Tennis(level: string) {
    // if (this.openent_rank_table_tennis == 'choose oppenent level') {
    this.openent_rank_table_tennis = level;
    // } else {
    // alert('please choose level of opponent');
    //}
  }
  Set_openent_player_level_Squash(level: string) {
    if (this.openent_rank_table_Squash == 'choose oppenent level') {
      this.openent_rank_table_Squash = level;
    } else {
      alert('please choose level of opponent');
    }
  }
  filling_data() {
    this.apiService.getEmployees().subscribe((data) => {
      this.player = data;
    });
  }
  s() {
    this.filling_data();
    for (let i of this.player) {
      if (i.username == this.apiService.username_Player) {
        this.playername = this.apiService.username_Player;
        this.player_level_Tennis = i.rank_tennis;
        this.player_level_Badminton = i.rank_badminton;
        this.player_level_Squash = i.rank_Squash;
        this.player_level_Table_Tennis = i.rank_table_tennis;
        this.First_time_login = i.First_time_login;
        console.log(i.First_time_login);
        if (this.First_time_login == 0) {
          this.show = true;
        } else {
          this.show = false;
        }
      }
    }
  }
  Submit() {
    let Monday = {
      username: this.apiService.username_Player,
      Day: 'Mon',
      Tennis: this.Mon_Tennis_Priority,
      badminton: this.Mon_Badminton_Priority,
      table_tennis: this.Mon_Table_Tennis_Priority,
      Squash: this.Mon_Squash_Priority,
    };
    let Tuesday = {
      username: this.apiService.username_Player,
      Day: 'Tue',
      Tennis: this.Tue_Tennis_Priority,
      badminton: this.Tue_Badminton_Priority,
      table_tennis: this.Tue_Table_Tennis_Priority,
      Squash: this.Tue_Squash_Priority,
    };
    let Wednesday = {
      username: this.apiService.username_Player,
      Day: 'Wed',
      Tennis: this.Wed_Tennis_Priority,
      badminton: this.Wed_Badminton_Priority,
      table_tennis: this.Wed_Table_Tennis_Priority,
      Squash: this.Wed_Squash_Priority,
    };
    let Thursday = {
      username: this.apiService.username_Player,
      Day: 'Thu',
      Tennis: this.Thu_Tennis_Priority,
      badminton: this.Thu_Badminton_Priority,
      table_tennis: this.Thu_Table_Tennis_Priority,
      Squash: this.Thu_Squash_Priority,
    };
    let Friday = {
      username: this.apiService.username_Player,
      Day: 'Fri',
      Tennis: this.Fri_Tennis_Priority,
      badminton: this.Fri_Badminton_Priority,
      table_tennis: this.Fri_Table_Tennis_Priority,
      Squash: this.Fri_Squash_Priority,
    };
    let Saturday = {
      username: this.apiService.username_Player,
      Day: 'Sat',
      Tennis: this.Sat_Tennis_Priority,
      badminton: this.Sat_Badminton_Priority,
      table_tennis: this.Sat_Table_Tennis_Priority,
      Squash: this.Sat_Squash_Priority,
    };

    this.apiService.createPlayerpriority(Monday).subscribe(
      (res) => {
        console.log('Employee successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
    this.apiService.createPlayerpriority(Tuesday).subscribe(
      (res) => {
        console.log('Employee successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
    this.apiService.createPlayerpriority(Wednesday).subscribe(
      (res) => {
        console.log('Employee successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
    this.apiService.createPlayerpriority(Thursday).subscribe(
      (res) => {
        console.log('Employee successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
    this.apiService.createPlayerpriority(Friday).subscribe(
      (res) => {
        console.log('Employee successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
    this.apiService.createPlayerpriority(Saturday).subscribe(
      (res) => {
        console.log('Employee successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
    let player = {
      username: '',
      password: '',
      email: '',
      rank_tennis: '',
      rank_badminton: '',
      rank_table_tennis: '',
      rank_Squash: '',
      First_time_login: '0',
      openent_rank_tennis: '0',
      openent_rank_badminton: '0',
      openent_rank_table_tennis: '0',
      openent_rank_table_Squash: '0',
    };
    let temp;
    let index = 0;
    let j = 0;
    for (let i of this.player) {
      if (i.username == this.apiService.username_Player) {
        index = j;
      }
      j++;
    }
    console.log('Index = ' + index);

    for (let i of this.player) {
      if (i.username == this.apiService.username_Player) {
        temp = i._id;
        player.username = i.username;
        player.password = i.password;
        player.email = i.email;
        player.rank_tennis = i.rank_tennis;
        player.rank_badminton = i.rank_badminton;
        player.rank_table_tennis = i.rank_table_tennis;
        player.rank_Squash = i.rank_Squash;
        player.First_time_login = '1';
        if (i.rank_tennis == 'choose level') {
          player.openent_rank_tennis = '0';
        } else {
          player.openent_rank_tennis = this.openent_rank_tennis;
        }
        if (i.rank_badminton == 'choose level') {
          player.openent_rank_badminton = '0';
        } else {
          player.openent_rank_badminton = this.openent_rank_badminton;
        }
        if (i.rank_table_tennis == 'choose level') {
          player.openent_rank_table_tennis = '0';
        } else {
          player.openent_rank_table_tennis = this.openent_rank_table_tennis;
        }
        if (i.rank_Squash == 'choose level') {
          player.openent_rank_table_Squash = '0';
        } else {
          player.openent_rank_table_Squash = this.openent_rank_table_Squash;
        }
        index = this.player.findIndex((x) => x.username === i.username);
        this.apiService.deleteEmployee(i._id).subscribe((data) => {
          this.player.splice(index, 1);
          console.log('Done');
        });
      }
    }

    //Schedule will form
    let schedule = {
      username: this.apiService.username_Player,
      Mon: this.Mon,
      Tue: this.Tue,
      Wed: this.Wed,
      Thu: this.Thu,
      Fri: this.Fri,
      Sat: this.Sat,
    };
    this.apiService.createSchedule(schedule).subscribe(
      (res) => {
        console.log('Employee successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(temp);
    //this.apiService.deleteEmployee(temp);
    this.apiService.createEmployee(player).subscribe(
      (res) => {
        console.log('Employee successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
    this.filling_data();
    this.apiService.getEmployees().subscribe((data) => {
      this.apiService.player = data;
    });
    this.show = false;
    this.router.navigate(['./']);
  }

  ShowPracticeSession() {
    this.show = true;
    this.showSchedule = false;
    this.showMatch = false;
    this.showPerformance = false;
    this.isFound();
  }

  isFound() {
    for (let s of this.sessions) {
      if (
        this.apiService.username_Player == s.Player1_username ||
        this.apiService.username_Player == s.Player2_username
      ) {
        console.log('idhar aya');
        this.found = true;
        break;
      }
    }
  }

  isFound2() {
    for (let m of this.matches) {
      if (
        this.apiService.username_Player == m.Player1_username ||
        this.apiService.username_Player == m.Player2_username
      ) {
        console.log('idhar aya');
        this.found = true;
        break;
      }
    }
  }

  ShowSchedule() {
    this.showSchedule = true;
    this.show = false;
    this.showMatch = false;
    this.showPerformance = false;
    this.isFound();
  }

  ShowMatch() {
    this.showSchedule = false;
    this.show = false;
    this.showMatch = true;
    this.showPerformance = false;
    this.isFound2();
  }

  ShowPerformance() {
    this.showSchedule = false;
    this.show = false;
    this.showMatch = false;
    this.showPerformance = true;
  }

  SetMatch() {
    this.notification_flag = true;
    this.apiService.player_fully_registered();
  }

  ngOnInit(): void {}
}
