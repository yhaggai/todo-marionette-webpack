const Marionette = require('marionette');
const Todos = require('app/models/todos.js');
const TodoPage = require('app/views/pages/todo_pages/todo_page.js');
class TodoController extends Marionette.Object {
  initialize() {
    this.todoList = new TodoList();
  }

  start() {
    this.todoList.fetch().then(() => this.showTodoList(this.todoList));
  }
  showTodoList(todoList) {
    this.showChildView(
      'main',
      new TodoMVC.ListView({
        collection: todoList
      })
    );
  }
}
