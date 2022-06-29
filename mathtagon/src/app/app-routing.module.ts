// import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game/game-list/game-list.component';
import { TopFiveComponent } from './game/top-five/top-five.component';
import { AuthComponent } from './user/auth/auth.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'top-five',
    component: TopFiveComponent,
  },
  {
    path: 'history',
    component: GameListComponent,
  },
  {
    path: 'home',
    component: TopFiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
