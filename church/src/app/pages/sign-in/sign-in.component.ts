import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  isLoad: boolean = false;
  loginForm!:FormGroup;
  isLoginFailed:boolean = false;
  errorMessage: string = '';
  

  constructor(private router: Router,
    private authService:AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login({ email, password }).subscribe(
        response => {
          this.authService.saveToken(response.token);
          this.router.navigate(['/home-page']);
        },
        error => {
          this.isLoginFailed = true;
          this.errorMessage = 'Login failed. Please try again.';
          console.error('Login failed', error);
        }
      );
    }
  }


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
