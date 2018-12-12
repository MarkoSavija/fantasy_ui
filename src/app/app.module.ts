import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerService } from './service/player-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FixturesComponent,
    MyTeamComponent,
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent],
  entryComponents: [ PlayerDetailsComponent ]
})
export class AppModule { }
