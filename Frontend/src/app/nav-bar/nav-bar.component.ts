import { Component } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  currentUser!: any;
  islogin: boolean = false;
  isadmin: boolean = false;
  constructor(private _AuthenticationService: AuthenticationService) {

    this._AuthenticationService.currentUser.subscribe(() => {
      if (this._AuthenticationService.currentUser.getValue().email != '') {
        this.islogin = true;
        this.currentUser = localStorage.getItem('loggedUser');
        this.currentUser = JSON.parse(this.currentUser);
        if (this.currentUser.isAdmin) {
          this.isadmin = true;
        }
        else {
          this.isadmin = false;
        }
      }
      else {
        this.islogin = false;
      }
    })

  }
  isLogOut() {
    this._AuthenticationService.logout();
  }


}
