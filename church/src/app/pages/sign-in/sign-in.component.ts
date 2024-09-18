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
signInForm: any;
  isSignUpFailed: boolean | undefined;
  passwordMatchValidator: any;
  

  constructor(private router: Router,
    private authService:AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[A-Z]).+$')
      ]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidators(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }


  onSubmit(): void {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      this.authService.register({ email, password, confirmPassword: this.signInForm.value.confirmPassword }).subscribe(
        response => {
          // Handle successful registration, e.g., navigate to login page
          this.router.navigate(['/sign-in']);
        },
        error => {
          this.isLoginFailed = true;
          this.errorMessage = 'Registration failed. Please try again.';
          console.error('Registration failed', error);
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
