import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  isSignUpFailed: boolean = false;
  isLoads: boolean = false;
  errorMessage: string = "";
  navigateToSignIn: any;

  constructor(private router: Router,
    private authService:AuthService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[A-Z]).+$')
      ]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const { email, password } = this.signUpForm.value;
      this.authService.register({ email, password, confirmPassword: this.signUpForm.value.confirmPassword }).subscribe(
        response => {
          // Handle successful registration, e.g., navigate to login page
          this.router.navigate(['/sign-in']);
        },
        error => {
          this.isSignUpFailed = true;
          this.errorMessage = 'Registration failed. Please try again.';
          console.error('Registration failed', error);
        }
      );
    }
  }

   

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
