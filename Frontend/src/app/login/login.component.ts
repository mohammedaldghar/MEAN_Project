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

  constructor(private _AuthenticationService: AuthenticationService, private _Router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  })

  submitLoginForm(loginForm: FormGroup) {
    this._AuthenticationService.login(loginForm.value).subscribe({
      next: (response) => {
        //console.log(response);

        if (response.message == "Welcome") {
          //console.log(response)
          localStorage.setItem('userToken', response.token)
          this._AuthenticationService.saveCurrentUser();
          this.user = this._AuthenticationService.currentUser.value
          ///
          //console.log(this.user?.isAdmin)

          console.log("noooooor");
          //this._Router.navigate(['/home'])

          console.log(this._AuthenticationService.currentUser.value.isAdmin)
          if (this._AuthenticationService.currentUser.value.isAdmin) {
            this._Router.navigate(['/admin-category'])
          }
          else {
            this._Router.navigate(['/home'])
          }
        }
      },
      error: (err) => {
        this.error = err.error.message
      }
    })
  }
}



