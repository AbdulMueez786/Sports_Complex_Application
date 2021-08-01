import { Player } from './../Model/player';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  username_Player: string;
  Couch_username: string;
  session: any = [];
  player: any = [];
  Fully_Registered_players: any = [];
  notification: any = [];
  constructor(private http: HttpClient) {
    this.getEmployees().subscribe((data) => {
      this.player = data;
    });
    this.getSessions().subscribe((data) => {
      this.session = data;
    });
    this.getNotification().subscribe((data) => {
      this.notification = data;
    });
    this.player_fully_registered();
  }

  player_fully_registered() {
    for (let i of this.player) {
      if (i.First_time_login == '1') {
        if (!this.Fully_Registered_players.find((x) => x === i))
          this.Fully_Registered_players.push(i);
      }
    }
  }
  // Create
  createEmployee(data): Observable<any> {
    console.log('hello' + data);
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  createSchedule(data): Observable<any> {
    let url = `${this.baseUri}/createschedule`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  createPlayerpriority(data): Observable<any> {
    let url = `${this.baseUri}/createspriority`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  createCouches(data): Observable<any> {
    let url = `${this.baseUri}/createscouch`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  createSession(data): Observable<any> {
    let url = `${this.baseUri}/createSession`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  createMatch(data): Observable<any> {
    let url = `${this.baseUri}/creatematch`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  createNotification(data): Observable<any> {
    let url = `${this.baseUri}/createNotification`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  // Get all employees
  getNotification() {
    return this.http.get(`${this.baseUri}/getallnotification`);
  }
  getEmployees() {
    return this.http.get(`${this.baseUri}`);
  }
  getcouches() {
    return this.http.get(`${this.baseUri}/allcouches`);
  }

  getSchedules() {
    return this.http.get(`${this.baseUri}/allSchedules`);
  }

  getSessions() {
    return this.http.get(`${this.baseUri}/getsessions`);
  }

  getprioriies() {
    return this.http.get(`${this.baseUri}/allpriorities`);
  }
  getmatches() {
    return this.http.get(`${this.baseUri}/getallmatches`);
  }
  // Get employee
  getEmployee(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update employee
  updateEmployee(id, data): Observable<any> {
    console.log('id=' + id);
    console.log('data' + data.username);
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete employee
  deleteEmployee(_id): Observable<any> {
    console.log('this is =' + _id);
    console.log();
    let url = `${this.baseUri}/delete/${_id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  deleteCouche(_id): Observable<any> {
    console.log('this is =' + _id);
    console.log();
    let url = `${this.baseUri}/deletecouch/${_id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  deleteNotification(_id): Observable<any> {
    let url = `${this.baseUri}/deletenotification/${_id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  deleteMatch(_id): Observable<any> {
    let url = `${this.baseUri}/deletematch/${_id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  deleteSessions(_id): Observable<any> {
    console.log('this is =' + _id);
    console.log();
    let url = `${this.baseUri}/deletesession/${_id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
