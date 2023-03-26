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
          this._AuthenticationService.saveCurrentUser();
          this.user = this._AuthenticationService.currentUser.value
          //console.log(this.user?.isAdmin)

          console.log("noooooor");

          console.log(this._AuthenticationService.currentUser.value.isAdmin)
          if (this._AuthenticationService.currentUser.value.isAdmin) {
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
