import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './user/auth/auth.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavBarComponent
  ],
  imports: [
    AuthModule.forRoot({
      domain: environment.authDomain,
      clientId: environment.authClientId
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
