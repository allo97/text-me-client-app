import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// custom validator to check that two fields match
export function mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null =>
    form.get(controlName)?.value !== form.get(matchingControlName)?.value ? { mustMatch: true } : null;
}
