import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

import { LoginModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends HttpService {
  private endpoint = 'auth/';

  login(data: LoginModel) {
    return this.post(this.endpoint + 'login', data);
  }

  validToken(token: any) {
    return this.post(this.endpoint + 'isAuth', token);
  }
}
