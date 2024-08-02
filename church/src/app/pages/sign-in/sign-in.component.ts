import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  isLoad: boolean = false;

  constructor(private router: Router) {}

  startLoading(): void {
    this.isLoad= true;

    // Simulate a delay for loading (e.g., network request or other processing)
    setTimeout(() => {
      // After loading is done, navigate to the next page or perform an action
      this.router.navigate(['/home-page']);  // Update '/next-page' to your target route
      this.isLoad = false;
    }, 2000);  // Adjust the delay as needed
  }
}
