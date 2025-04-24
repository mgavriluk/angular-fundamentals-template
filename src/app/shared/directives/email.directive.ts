import { Directive } from "@angular/core";
import {
  AbstractControl,
  ValidationErrors,
  Validator,
  NG_VALIDATORS,
} from "@angular/forms";

@Directive({
  selector: "[emailValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex for email validation
    const value = control.value;

    if (!value) {
      return null; // If no value, no validation error
    }

    const isValid = emailRegex.test(value);
    return isValid ? null : { invalidEmail: true };
  }
}
