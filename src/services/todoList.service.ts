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

  removeItem(item) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  clearEditing() {
    this.todoList.forEach((listItem) => listItem.editing = false);
  }

  addItem(title) {
    this.todoList.push({
      title,
      completed: false,
      editing: false
    });
  }

  getIncomplete() {
    return this.todoList.filter((item) => {
      return !item.completed;
    })
  }

  getIncompleteCount() {
    return this.getIncomplete().length;
  }

  getTotalCount() {
    return this.todoList.length;
  }

}