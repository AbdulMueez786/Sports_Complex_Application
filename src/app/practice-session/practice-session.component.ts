import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-practice-session',
  templateUrl: './practice-session.component.html',
  styleUrls: ['./practice-session.component.css'],
})
export class PracticeSessionComponent implements OnInit {
  
  @Input() found: boolean;
  
  Day: string;
  Game: string;

  player: any;

  sessions: any = [];

  constructor(private router: Router, public apiService: ApiService) {
    this.apiService.getSessions().subscribe((data) => {
      this.sessions = data;
    });
    this.player = this.apiService.player;
  }
  filldata() {
    this.apiService.getSessions().subscribe((data) => {
      this.sessions = data;
    });
  }

  ngOnInit(): void {}
}
