import {Component} from '@angular/core';

@Component({
  selector:'todolist-footer',
  template:`
  <footer class="footer">
    <span class="todo-count">
      <strong>1</strong>
      item left
    </span>
    <button class="clear-completed">Clear completed</button>
  </footer>
`
})

export class TodolistFooterComponent {}
