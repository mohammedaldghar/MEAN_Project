import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

}
