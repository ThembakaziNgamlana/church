import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  isLoads: boolean = false;

  constructor(private router: Router) {}

  startLoading(): void {
    this.isLoads= true;

    // Simulate a delay for loading (e.g., network request or other processing)
    setTimeout(() => {
      // After loading is done, navigate to the next page or perform an action
      this.router.navigate(['/sign-in']);  // Update '/next-page' to your target route
      this.isLoads = false;
    }, 2000);  // Adjust the delay as needed
}
}
