import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


/**
 * check if user is not authenticated navigate to /auth/login with queryParams having current url
 * and pass it if authenticated
 *
 * @export
 * @class AuthGuardService
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!localStorage.getItem('isAuthenticated')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
