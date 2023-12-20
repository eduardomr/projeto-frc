import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/conversify/login/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class JwtAuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  validToken(): boolean {
    if (localStorage.getItem('token')) {
      const tokenObj = { userID: localStorage.getItem('token') };

      this.authService.validToken(JSON.stringify(tokenObj)).subscribe({
        next: () => {
          console.log(':: JwtAuthService :: Token is valid.');
          return true;
        },
        error: (err) => {
          localStorage.removeItem('token');
          return false;
        },
      });
    }
    return false;
  }

  sessionHasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['home']);
  }
}
