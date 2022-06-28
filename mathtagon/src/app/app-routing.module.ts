import { SignupComponent } from './user/signup/signup.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game/game-list/game-list.component';
import { TopFiveComponent } from './game/top-five/top-five.component';

const routes: Routes = [
  {
    path: 'top-five',
    component: TopFiveComponent,
  },
  {
    path: 'history',
    component: GameListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
