import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn(): boolean {
    return !!localStorage.getItem('CognitoIdentityServiceProvider.276f3j5n0aj89hodvudai6jbgh.egor-2.idToken');
  }
}
