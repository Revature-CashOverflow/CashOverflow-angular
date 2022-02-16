import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthService } from '../service/auth/auth-service.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
  constructor(private authServ: AuthService, private router: Router) {}

  public canActivate(): boolean {
    if (!this.authServ.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
