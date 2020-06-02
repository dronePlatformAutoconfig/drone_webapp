import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) { }

  async canActivate(): Promise<boolean> {
    return await new Promise((resolve) => {this.authService.loggedIn()
      .then((isLogged) => {
        if (!isLogged) {
          this.router.navigate(['/login']);
        }
        resolve(isLogged);
      })
      .catch(() => {
        this.router.navigate(['/login']);
        resolve(false); });
    });
  }
}
