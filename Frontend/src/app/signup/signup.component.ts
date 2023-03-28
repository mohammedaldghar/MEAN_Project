import { Component } from '@angular/core';
import { from } from 'rxjs';

import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  error: string = '';

  constructor(private _AuthenticationService: AuthenticationService, private _Router: Router) { }        //make object from service

  registerForm = new FormGroup({
    firstName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    lastName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.pattern('^[A-Z][a-z0-9]{3,8}$'), Validators.required]),

    //name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),

  })
  submitRegisterForm(registerForm: FormGroup) {
    // console.log(registerForm.value)      /* will print object key and vaue*/
    this._AuthenticationService.register(registerForm.value).subscribe({       //  call function in service
      next: (response) => {
        if (response.message == "added_successfully") {
          console.log("hi")
          this._Router.navigate(['/login'])
        }
      },
      error: (err) => {
        this.error = err.error.message
      }
    })   
  }
}
