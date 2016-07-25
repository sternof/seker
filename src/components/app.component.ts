import {Component} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector  : 'app',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template  : `
    <h1>Angular2 Course</h1>
    
    <form [formGroup]="loginForm">
    
      <input type="text" 
             placeholder="username" 
             [formControl]="username"
             required
             name="username">
                 
      <span *ngIf="username.hasError('required')">user name required!</span>             
             
      <input type="password" 
             placeholder="password" 
             [formControl]="password" 
             name="password">
                        
      <button (click)="print()">Submit</button>
      
    </form>    
    
    `,
})

export class AppComponent {

  private username = new FormControl('', Validators.required);

  private password = new FormControl('',
      Validators.compose(
          [
            CustomValidators.containSpace,
            Validators.required
          ]
      ), CustomValidators.asyncValidation );

  private loginForm = new FormGroup({
    username: this.username,
    password: this.password
  });

  constructor() {
    this.password.valueChanges
        .subscribe( value => console.log(value))
  }

  print() {
    console.log(this.loginForm.valid);
  }
}

class CustomValidators {

  static containSpace(control:FormControl) {
    if (control.value.indexOf(" ") >= 0) {
      return {containSpace: true}
    }

    return null;
  }

  static asyncValidation(control: FormControl) {
    return new Promise( (resolve, reject) => {
      setTimeout( ()=> reject({invalid: true}), 3000)
    })
  }

}
