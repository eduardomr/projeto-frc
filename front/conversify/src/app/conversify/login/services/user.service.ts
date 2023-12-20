import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

import { LoginModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService extends HttpService {
  private endpoint = 'user/';

  register(data: LoginModel) {
    return this.put(this.endpoint + 'add', JSON.stringify(data));
  }

  retrieve(token: string) {
    return this.post(
      this.endpoint + 'retrieve',
      JSON.stringify({ token: token })
    );
  }
}
