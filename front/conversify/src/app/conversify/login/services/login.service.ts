import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

import { LoginModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends HttpService {
  private endpoint = 'user/';

  login(data: LoginModel) {
    return this.post(this.endpoint, data);
  }

  register(data: LoginModel) {
    return this.put(this.endpoint + 'add', JSON.stringify(data));
  }
}
