import { Player } from './../Model/player';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css'],
})
export class CreateMatchComponent implements OnInit {
  matches: any = [];
  player: any = [];
  Day: string = 'Sun';
  show_Match: boolean = false;
  Selected_Player2: string = 'Select Player 2';
  Selected_Player1: string;
  Select_Couch: string = 'Select Couch';
  couches: any = [];
  show: boolean = false;
  constructor(private router: Router, public apiService: ApiService) {
    this.apiService.getcouches().subscribe((data) => {
      this.couches = data;
    });
    this.apiService.getmatches().subscribe((data) => {
      this.matches = data;
    });
  }

  s(i: any) {
    this.show_Match = true;
    this.Selected_Player1 = i.username;
    console.log(this.matches);
    for (let j of this.matches) {
      if (
        i.username == j.Player1_username ||
        i.username == j.Player2_username
      ) {
        this.show = true;
        this.show_Match = false;
      }
    }
  }
  CreateMatch() {
    this.show_Match = false;
    let Match = {
      SessionNo: '',
      Game: 'Tennis',
      Player1_username: this.Selected_Player1,
      Player2_username: this.Selected_Player2,
      Player1_Ranking: 'Not added by coach',
      Player2_Ranking: 'Not added by coach',
      Result: '_',
      Game_Court: '_',
      Game_Time: '_',
      Couch_username: this.Select_Couch,
      p1_attendence: '_',
      p2_attendence: '_',
      DAY: 'Sun',
    };
    this.apiService.createMatch(Match).subscribe(
      (res) => {
        console.log('Couch successfully created!');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  refresh() {
    this.show_Match = false;
    this.Selected_Player2 = 'Select Player 2';
    this.Selected_Player1 = '';
    this.Select_Couch = 'Select Couch';
  }
  SetPlayer2(p2_username: string) {
    this.Selected_Player2 = p2_username;
  }
  SetCouch(couch_username: string) {
    this.Select_Couch = couch_username;
  }
  AvoidMatchDuplication(p_username: string) {
    for (let i of this.matches) {
      if (
        i.Player1_username == p_username ||
        i.Player2_username == p_username
      ) {
        return false;
      }
    }
    return true;
  }
  ngOnInit(): void {}
}
