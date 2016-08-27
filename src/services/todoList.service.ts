export class TodoListService {

  todoList = [
    { title: 'RSVP Yes', completed: true, editing: false },
    { title: 'Set up environment', completed: true, editing: false },
    { title: 'Clone project', completed: false, editing: false },
    { title: 'Come to meetup', completed: false, editing: false },
  ];

  getTodoList() {
    return this.todoList;
  }
  
}