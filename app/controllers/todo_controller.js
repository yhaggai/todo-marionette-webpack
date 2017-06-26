const Marionette = require('marionette');
const Todos = require('app/models/todos.js');
const TodoPage = require('app/views/pages/todo_pages/todo_page.js');
class TodoController extends Marionette.Object {

  initialize() {
    this.todoList = new TodoMVC.TodoList();
  }

  start() {
    this.todoList.fetch().then(() =>
      this.showTodoList(this.todoList)
    )
  }
  showTodoList(todoList) {
    TodoMVC.App.root.showChildView('main', new TodoMVC.ListView({
      collection: todoList
    }));
  }
}