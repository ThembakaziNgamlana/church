import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventsComponent } from './pages/events/events.component';
import { Event1Component } from './pages/event1/event1.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    SignUpComponent,
    SignInComponent,
    NavbarComponent,
    EventsComponent,
    Event1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
