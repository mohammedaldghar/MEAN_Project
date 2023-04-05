import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user!: User;
  error: string = '';
  href: string = "";
  constructor(private _AuthenticationService: AuthenticationService, private _Router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  })

  submitLoginForm(loginForm: FormGroup) {
    this._AuthenticationService.login(loginForm.value).subscribe({
      next: (response) => {
        if (response.message == "Welcome") {
          localStorage.setItem('userToken', response.token)
          localStorage.setItem('loggedUser',JSON.stringify(response.user))
          this.href = this._Router.url;
          localStorage.setItem('path', this.href)
          this._AuthenticationService.saveCurrentUser();
          this.user = this._AuthenticationService.currentUser.value
          this._Router.navigate(['/home'])
        }
      },
      error: (err) => {
        this.error = err.error.message
      }
    })
  }
}

