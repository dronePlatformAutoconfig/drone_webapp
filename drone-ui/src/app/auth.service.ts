import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  username = '';

  loggedIn(): Promise<boolean> {
    return new Promise((resolve) => {Auth.currentAuthenticatedUser()
      .then((user) => {
        this.username = user.username;
        resolve(true);
      })
      .catch(() => {resolve(false); });
    });
  }
}
