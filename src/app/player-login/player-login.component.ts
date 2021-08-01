import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-player-login',
  templateUrl: './player-login.component.html',
  styleUrls: ['./player-login.component.css'],
})
export class PlayerLoginComponent implements OnInit {
  Username: string = '';
  password: string = '';
  player: any = [];
  constructor(private router: Router, private apiService: ApiService) {
    this.apiService.getEmployees().subscribe((data) => {
      this.player = data;
    });
  }
  Submit() {
    this.apiService.getEmployees().subscribe((data) => {
      this.apiService.player = data;
    });
    if (this.Username != '' && this.password != '') {
      let flag = false;
      for (let i of this.player) {
        if (i.username == this.Username && i.password == this.password) {
          flag = true;
        }
      }
      if (flag == true) {
        this.apiService.username_Player = this.Username;
        this.router.navigate(['./PlayerDashboard']);
      } else {
        alert('this username dont exist or incorrect password');
      }
    } else {
      alert('incomplete information');
    }
  }
  ngOnInit(): void {}
}
