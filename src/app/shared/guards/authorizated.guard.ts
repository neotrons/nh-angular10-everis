import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageAuthService } from '../services/storage-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizatedGuard implements CanActivate {

  loginUrl: string = environment.loginUrl;
  constructor(
    private router: Router,
    private storage: StorageAuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.storage.getToken();
    if (token) {
      return true;
    }
    this.router.navigate([this.loginUrl]);
    return false;
  }

}
