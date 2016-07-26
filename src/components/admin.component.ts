import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  template: '<h2>Admin</h2>'
})

export class AdminComponent {

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(params => console.log(params));
  }

}