import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Route
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent implements OnInit {
  Couches: any = [];
  constructor(private router: Router, public apiService: ApiService) {
    this.apiService.getcouches().subscribe((data) => {
      this.Couches = data;
    });
  } // pass routes in constructor

  //add navidation function as following
  public onAdminLogin() {
    console.log(this.Couches);
    console.log(this.Couches.length == 0);
    if (this.Couches.length == 0) {
      console.log('hello');
      let couch = 'Tennis';
      for (let i = 0; i < 20; i++) {
        if (i == 5) {
          couch = 'Badminton';
        } else if (i == 10) {
          couch = 'Table tennis';
        } else if (i == 15) {
          couch = 'Squash';
        }

        this.apiService
          .createCouches({
            username: 'couch' + (i + 1).toString(),
            password: i + 1,
            Game: couch,
          })
          .subscribe(
            (res) => {
              console.log('Employee successfully created!');
            },
            (error) => {
              console.log(error);
            }
          );
      }
    }
    this.router.navigate(['./Adminlogin']);
  }
  public onCoahLogin() {
    this.router.navigate(['./CoachLogin']);
  }
  public onPlayerLogin() {
    this.router.navigate(['./PlayerLogin']);
  }
  public onRegister() {
    this.router.navigate(['./Register']);
  }
  ngOnInit(): void {}
}
