import { Component } from '@angular/core';
import { TodoListService } from '../../services/todoList.service';

@Component({
  selector: 'aah-footer',
  styleUrls: ['./footer.component.css'],

  template: `
    <footer class="footer">
      <span class="todo-count">
        <strong>{{ getCountMessage() }}</strong>
      </span>
      <button class="clear-completed">Clear completed</button>
    </footer>
  `
})

export class FooterComponent {

  constructor(private todoListService: TodoListService) {}

  getCountMessage() {
    const incomplete = this.todoListService.getIncompleteCount();
    const total = this.todoListService.getTotalCount();

    return `
      ${incomplete === 0 ? 'no' : incomplete} 
      item${incomplete === 1 ? '' : 's'} left (out of ${total})
      `;
  }

}
