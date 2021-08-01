import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  player: any = [];
  constructor(private router: Router, private apiService: ApiService) {
    this.apiService.getEmployees().subscribe((data) => {
      this.player = data;
    });
  }
  Submit() {
    //if (this.username != '' && this.password != '') {
    this.router.navigate(['./AdminDashboard']);
    // } else {
    //  alert('incomplete information');
    // }
  }
  ngOnInit(): void {}
}
