import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './user/auth/auth.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { TopFiveComponent } from './game/top-five/top-five.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavBarComponent,
    SignUpComponent,
    GameListComponent,
    ProfileComponent,
    TopFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
