import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { JwtAuthService } from './../services/jwt-auth.service';

@Injectable({
  providedIn: 'root',
})
export class JwtAuthGuard implements CanActivate, CanLoad {
  //cache = StorageUtil.inPersistentStore();

  constructor(private router: Router, private jwtAuthService: JwtAuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const url = state.url;

    if (url === '/access/login') {
      if (this.checkLogin(url)) {
        this.router.navigate(['chat']);
      }
      return true;
    }

    if (this.checkLogin(url)) {
      return true;
    }

    return false;
  }

  canLoad(
    route: import('@angular/router').Route,
    segments: import('@angular/router').UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    const url = segments.map((s) => `/${s}`).join('');
    if (url === '/access/login') {
      if (this.checkLogin(url)) {
        this.router.navigate(['chat']);
      }
      return true;
    }

    if (this.checkLogin(url)) {
      return true;
    }

    return false;
  }

  checkLogin(url: string): boolean {
    if (
      this.jwtAuthService.sessionHasToken() &&
      this.jwtAuthService.validToken()
    ) {
      console.log(':: JwtAuthGuard :: User is logged in.');
      return true;
    }
    console.log(':: JwtAuthGuard :: User is not logged in.');
    //this.jwtAuthService.logout();
    return false;
  }
}
