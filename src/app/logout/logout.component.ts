import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {
  constructor(private cookieServ: CookieService, private router: Router) {}

  ngOnInit(): void {
    console.log("deleting cookie");
    this.cookieServ.delete('token', '/', environment.domain);
    console.log(this.cookieServ.get('token'));
    this.router.navigate(['/login']);
  }
}
