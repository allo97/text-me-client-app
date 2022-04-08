import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'text-me-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginValid = true;

  public form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('on init');
  }

  public login() {
    console.log(this.form.value);
  }
}
