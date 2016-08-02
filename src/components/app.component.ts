import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'aah-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  directives: [HeaderComponent]
})

export class AppComponent {}
