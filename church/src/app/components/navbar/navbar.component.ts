import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showNavbar: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkNavbarVisibility();
    });
  }

  checkNavbarVisibility() {
    const currentRoute = this.router.url;
    // List of routes where the navbar should be hidden
    const hiddenRoutes = ['/', '/sign-in', '/sign-up', '/events', '/event1', '/event2'];

    // Update the visibility of the navbar based on the current route
    this.showNavbar = !hiddenRoutes.includes(currentRoute);
  }
}
