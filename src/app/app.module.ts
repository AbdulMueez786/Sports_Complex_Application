import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PlayerLoginComponent } from './player-login/player-login.component';
import { CoachLoginComponent } from './coach-login/coach-login.component';

import { Route, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { PlayerDashBoardComponent } from './player-dash-board/player-dash-board.component';
import { CouchDashBoardComponent } from './couch-dash-board/couch-dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePracticeSessionComponent } from './create-practice-session/create-practice-session.component';
import { PracticeSessionComponent } from './practice-session/practice-session.component';
import { PlayerScheduleComponent } from './player-schedule/player-schedule.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { SetMatchComponent } from './set-match/set-match.component';
import { MatchSessionComponent } from './match-session/match-session.component';
import { PerformanceComponent } from './performance/performance.component';

const ROUTES: Route[] = [
  { path: '', component: MainScreenComponent },
  { path: 'Adminlogin', component: AdminLoginComponent },
  { path: 'PlayerLogin', component: PlayerLoginComponent },
  { path: 'CoachLogin', component: CoachLoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'AdminDashboard', component: AdminDashBoardComponent },
  { path: 'CouchDashboard', component: CouchDashBoardComponent },
  { path: 'PlayerDashboard', component: PlayerDashBoardComponent },
  { path: 'PracticeSession', component: PracticeSessionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    AdminLoginComponent,
    PlayerLoginComponent,
    CoachLoginComponent,
    RegisterComponent,
    AdminDashBoardComponent,
    PlayerDashBoardComponent,
    CouchDashBoardComponent,
    CreatePracticeSessionComponent,
    PracticeSessionComponent,
    PlayerScheduleComponent,
    CreateMatchComponent,
    SetMatchComponent,
    MatchSessionComponent,
    PerformanceComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
