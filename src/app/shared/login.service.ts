import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  userLoggedIn = false;

  login(): void {
      this.userLoggedIn = true;
  }
}
