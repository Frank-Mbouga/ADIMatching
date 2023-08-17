import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavComponent } from './components/nav/nav.component';
import { EventsComponent } from './components/events/events.component';
import { ChatsComponent } from './components/chats/chats.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { MatchService } from './services/match.service';
import { NotificationsComponent } from './notifications/notifications.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    MainComponent,
    NotFoundComponent,
    HeaderComponent,
    LandingpageComponent,
    ProfileComponent,
    MatchesComponent,
    SidenavComponent,
    NavComponent,
    EventsComponent,
    ChatsComponent,
    SettingsComponent,
    HomeComponent,
    NotificationsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
