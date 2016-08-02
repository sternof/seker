import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>Login</h1>
    
    <input type="text"
           [(ngModel)]="user.username"            
           placeholder="username">
           
    <input type="password"
           [(ngModel)]="user.password"
           placeholder="password">
    
    <button (click)="login()">login</button>
    
    `,
})

export class AppComponent {

  private user: User;

  constructor() {
    this.user = new User('','');
  }

  login(){
    console.log(this.user);
    this.user = new User('','')
  }

}

class User {
  username: string;
  password: string;

  constructor(username:string, password:string) {
    this.username = username;
    this.password = password;
  }
}
