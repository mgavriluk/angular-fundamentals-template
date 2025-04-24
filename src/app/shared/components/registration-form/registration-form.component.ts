import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.scss"],
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ["", Validators.required, Validators.minLength(6)],
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.registrationForm.valid) {
      console.log("Form Submitted!", this.registrationForm.value);
      // Navigate to the login page after successful registration
      this.router.navigate(["/login"]);
    } else {
      console.log("Form is invalid");
    }
  }

  navigateToLogin(): void {
    this.router.navigate(["/login"]);
  }
}
