import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/conversify/login/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedService {
  constructor(private authService: AuthService) {}

  async isLogged(): Promise<boolean> {
    let storage = { userID: localStorage.getItem('token') };
    console.log(storage);

    if (!storage.userID) {
      return false;
    }

    await this.authService.checkLogged(JSON.stringify(storage)).subscribe({
      next: () => {
        console.log('teste');
        return true;
      },
      error: (err) => {
        console.log('teste2');
        return false;
      },
    });

    throw new Error('Logic error, this will never be reached.');
  }
}
