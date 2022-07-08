import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegularGuard implements CanActivate {

  constructor(private router: Router,
    private auth: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('route.url',state.url);
      if (this.auth.isLoggedIn() && !this.auth.isAdmin()) {
        return true;
      } 
      this.router.navigate(['/auth/login'],{queryParams:{returnUrl:state.url}});
      return false;
  }
  
}
