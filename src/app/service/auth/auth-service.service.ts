import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
  private authHelper: JwtHelperService = new JwtHelperService();
  constructor(private cookieServ: CookieService) {}

  public isAuthenticated(): boolean {
    const token = this.cookieServ.get('token');
    return !this.authHelper.isTokenExpired(token);
  }
}
