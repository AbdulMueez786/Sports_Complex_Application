import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css'],
})
export class PerformanceComponent implements OnInit {
  rankings: any = [];
  sessions: any = [];

  constructor(private router: Router, public apiService: ApiService) {
    this.apiService.getSessions().subscribe((data) => {
      this.sessions = data;
    });
    this.getRankings();
    console.log(this.rankings);
  }

  getRankings() {
    for (let s of this.apiService.session) {
      console.log(s.Player1_username);
      console.log(s.Player2_username);
      if (s.Player1_username === this.apiService.username_Player) {
        console.log('ye to hoga');
        console.log(s);
        let result: string;
        if (s.Result === 'player 1') result = 'Won';
        else result = 'Lost';
        let x: [string, string, string];
        x = [s.Player1_Ranking, s.p1_attendence, result];
        this.rankings.push(x);
      } else if (s.Player2_username === this.apiService.username_Player) {
        let result: string;
        if (s.Result === 'player 2') result = 'Won';
        else result = 'Lost';
        let x: [string, string, string];
        x = [s.Player2_Ranking, s.p2_attendence, result];
        this.rankings.push(x);
      }
    }
  }

  isPresent(att: string) {
    if (att === 'P') return true;
    console.log(att + ' is not equal to P');
    return false;
  }

  ngOnInit(): void {}
}
