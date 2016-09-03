import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserProvider } from '../providers/user-provider';

@Component({
    template: `
      <form class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="txtUser" class="sr-only">User Name</label>
        <input type="text" id="txtUser" name="txtUser" class="form-control" placeholder="User Name" required="" autofocus="" [(ngModel)]="userName" />
        <label for="txtPassword" class="sr-only" >Password</label>
        <input type="password" id="txtPassword" name="txtPassword" class="form-control" placeholder="Password" required=""   [(ngModel)]="password"  />
        <button class="btn btn-lg btn-primary btn-block" type="button" (click)="onLogIn()">Log In</button>
      </form>
   `
})
export class LoginComponent { 
    pageTitle: string = 'Sign In';
    userName: string = "";
    password: string = "";

    constructor(private _userProvider: UserProvider, private _router: Router){

    }
    onLogIn(): void {
        this._userProvider.authenticate(this.userName,this.password).subscribe((result) => {
            if (result) {
                this._router.navigate(['']);
            } else {
                alert('login failed: todo make this message pretty');
            }
        });
    }
   
    
}