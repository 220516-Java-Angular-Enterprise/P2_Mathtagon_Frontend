import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game/game-list/game-list.component';
import { TopFiveComponent } from './game/top-five/top-five.component';

const routes: Routes = [
  {
    path:'top-five',
    component:TopFiveComponent
  },
  {
    path:'history',
    component:GameListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
