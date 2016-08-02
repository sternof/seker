import {Component} from "@angular/core";
import {Validators,REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from "@angular/forms";
import {CustomValidators} from "./validators";

@Component({
  selector  : 'app',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template  : `
    <h1>Login</h1>
    
    <form [formGroup]="loginForm">    
    
      <input type="text"                   
             [formControl]="username"                                                                                                                                                                      
             placeholder="username">                  
                                     
      <input type="password"                     
             [formControl]="password"
             placeholder="password">
                    
      <button (click)="login()">login</button>   
    </form>
    
    `,
})

export class AppComponent {

  private loginForm:FormGroup;
  private username:FormControl;
  private password:FormControl;

  constructor() {

    this.username = new FormControl('',Validators.compose([
        CustomValidators.cannotContainSpace,
        CustomValidators.isNir,
    ]),
      Validators.compose([
          CustomValidators.isUnique
      ])
    );

    this.password = new FormControl();

    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password

    })
  }

  login(){
    console.log(this.loginForm);
  }


}
