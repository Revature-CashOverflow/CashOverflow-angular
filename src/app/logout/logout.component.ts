import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {
  constructor(private cookieServ: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.cookieServ.delete('Authorization', '/');
    this.router.navigate(['/login']);
  }
}
