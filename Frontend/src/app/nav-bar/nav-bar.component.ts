import { Component } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
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
  }
  isLogOut() {
    this._AuthenticationService.logout();
  }
  isadmin:boolean=false

}
