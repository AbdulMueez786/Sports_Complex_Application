import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-coach-login',
  templateUrl: './coach-login.component.html',
  styleUrls: ['./coach-login.component.css'],
})
export class CoachLoginComponent implements OnInit {
  username: string;
  password: string;
  couches: any = [];
  constructor(private router: Router, public apiService: ApiService) {
    this.apiService.getcouches().subscribe((data) => {
      this.couches = data;
    });
  }

  Submit() {
    let flag = false;
    for (let i of this.couches) {
      if (i.username == this.username && i.password == this.password) {
        this.apiService.Couch_username = i.username;
        console.log(this.apiService.Couch_username);
      }
    }

    this.router.navigate(['./CouchDashboard']);
  }
  ngOnInit(): void {}
}
