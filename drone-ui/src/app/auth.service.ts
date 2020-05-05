import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  userIsLoggedIn = false;

  loggedIn(): boolean {
    Auth.currentAuthenticatedUser()
      .then(() => { this.userIsLoggedIn = true; })
      .catch(() => { this.userIsLoggedIn = false; });
    return  this.userIsLoggedIn
  }
}
