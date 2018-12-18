import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full'},
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'my-team', component: MyTeamComponent},
    { path: 'fixtures', component: FixturesComponent},
    { path: 'player-details', component: PlayerDetailsComponent},
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
