import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-link-account',
  templateUrl: './link-account.component.html',
  styleUrls: ['./link-account.component.css']
})
export class LinkAccountComponent {

  constructor(private auth: AuthService) { }


  errorMessage:string = ''

  loginWithAuth() {
    this.auth.loginWithPopup();
  }


}
