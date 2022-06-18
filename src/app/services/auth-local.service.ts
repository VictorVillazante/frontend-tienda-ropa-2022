import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceLocal {
  public userProfile:any;

  constructor(public auth: AuthService) { }
  public login(): void {
    this.auth.loginWithRedirect();
  }
}
