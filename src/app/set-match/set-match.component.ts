import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-set-match',
  templateUrl: './set-match.component.html',
  styleUrls: ['./set-match.component.css'],
})
export class SetMatchComponent implements OnInit {
  Select_Game: string = 'Select Game';
  Selected_Player2: string = 'Select Your opponent player';
  Total_Game = ['Tennis', 'Badminton', 'Table tennis', 'Squash'];
  games: any = [];
  show: boolean = false;
  constructor(private router: Router, public apiService: ApiService) {
    for (let i of this.apiService.player) {
      if (i.username == this.apiService.username_Player) {
        if (i.rank_tennis != 'choose level') {
          this.games.push(this.Total_Game[0]);
        }

        if (i.rank_badminton != 'choose level') {
          this.games.push(this.Total_Game[1]);
        }
        if (i.rank_table_tennis != 'choose level') {
          this.games.push(this.Total_Game[2]);
        }
        if (i.rank_Squash != 'choose level') {
          this.games.push(this.Total_Game[3]);
        }
      }
    }
  }
  SetGame(i: string) {
    this.Select_Game = i;
  }
  SetPlayer2(p_username) {
    this.Selected_Player2 = p_username;
  }
  SendNotification() {
    if (this.Selected_Player2 == 'Select Your opponent player') {
      this.Selected_Player2 = 'any player';
    }
    let notify = {
      Game: this.Select_Game,
      Player1_username: this.apiService.username_Player,
      Player2_username: this.Selected_Player2,
    };
    this.apiService.createNotification(notify).subscribe(
      (res) => {
        console.log('Notification  successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
    this.show = true;
  }
  ngOnInit(): void {}
}
