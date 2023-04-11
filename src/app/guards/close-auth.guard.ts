import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


/**
 * check if user authenticated navigate user to the following url in queryParams
 * pass it if user isn't authenticated
 * @export
 * @class CloseAuthGuardService
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root',
})
export class CloseAuthGuardService implements CanActivate {
  constructor(private authService: AuthService,  private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('isAuthenticated')) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
