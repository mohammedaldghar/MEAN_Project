import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  user!: User;
  error: string = '';
  href: string = '';
  constructor(private _AuthenticationService: AuthenticationService, private _Router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  })

  submitLoginForm(loginForm: FormGroup) {
    this._AuthenticationService.login(loginForm.value).subscribe({
      next: (response) => {

        if (response.message == "Welcome") {

          this.user = response.user;
          console.log(this.user)

          if (this.user.isAdmin) {
            localStorage.setItem('userToken', response.token)
            localStorage.setItem('loggedUser', JSON.stringify(response.user))
            this.href = this._Router.url;
            localStorage.setItem('path', this.href)
            this._AuthenticationService.saveCurrentUser();
            this._Router.navigate(['/admin-category'])
            
          }
          else {
            this._Router.navigate(['/admin'])
          }
        }
      },
      error: (err) => {
        this.error = err.error.message
      }
    })
  }


}
