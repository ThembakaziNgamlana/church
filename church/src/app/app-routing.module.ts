import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EventsComponent } from './pages/events/events.component';
import { Event1Component } from './pages/event1/event1.component';
import { Event2Component } from './pages/event2/event2.component';
const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event1', component: Event1Component },
  { path: 'event2', component: Event2Component },
  { path: 'home-page', component: HomePageComponent },
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
