import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
