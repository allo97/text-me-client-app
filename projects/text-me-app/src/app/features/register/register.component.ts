import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { mustMatch } from '../../shared/validators/must-match.validator';

@Component({
  selector: 'text-me-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public loginValid = true;

  public form = this.fb.group(
    {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    },
    {
      validators: mustMatch('password', 'confirmPassword')
    }
  );
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('on init');
  }

  public login() {
    console.log(this.form.value);
  }

  public register() {
    console.log(this.form.value);
  }
}
