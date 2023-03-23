import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }
  ngOnInit(): void { }
  onLogInClk() {
    this.router.navigate(['/login'])
  }
  onSignUpClk() {
    this.router.navigate(['/signup'])
  }
}
