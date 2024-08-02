import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  // constructor(private router: Router) {}

  // navigateToSignUp() {
  //   this.router.navigate(['/sign-up']);
  isLoading: boolean = false;

  constructor(private router: Router) {}

  startLoading(): void {
    this.isLoading = true;

    // Simulate a delay for loading (e.g., network request or other processing)
    setTimeout(() => {
      // After loading is done, navigate to the next page or perform an action
      this.router.navigate(['/sign-up']);  // Update '/next-page' to your target route
      this.isLoading = false;
    }, 2000);  // Adjust the delay as needed
  }
  }

