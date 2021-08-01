import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-match-session',
  templateUrl: './match-session.component.html',
  styleUrls: ['./match-session.component.css']
})
export class MatchSessionComponent implements OnInit {

  @Input() found: boolean;
  
  Day: string;
  Game: string;

  player: any;

  matches: any = [];

  constructor(private router: Router, public apiService: ApiService) { 
    this.apiService.getmatches().subscribe((data) => {
      this.matches = data;
    });
    this.player = this.apiService.player;
  }

  filldata() {
    this.apiService.getmatches().subscribe((data) => {
      this.matches = data;
    });
  }

  ngOnInit(): void {
  }

}
