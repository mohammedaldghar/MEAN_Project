import { Component } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  currentUser!:any;
  islogin: boolean = false;
  constructor(private _AuthenticationService: AuthenticationService) {

    this._AuthenticationService.currentUser.subscribe(() => {
      if (this._AuthenticationService.currentUser.getValue().email != '') {
        this.islogin = true;
      }
      else {
        this.islogin = false;
      }
    })
    this.currentUser=localStorage.getItem('loggedUser');
    this.currentUser=JSON.parse(this.currentUser);
  }
  isLogOut() {
    this._AuthenticationService.logout();
  }
  isadmin:boolean=false

}
