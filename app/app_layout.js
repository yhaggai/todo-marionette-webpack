const Marionette = require('backbone.marionette');
const layoutTemplate = require('./app_layout.jade');
const Todos = require('./models/todos.js');
const Todo = require('./models/todo.js');
const TodoListView = require('./views/components/todo_list/todo_list.js');

class AppLayout extends Marionette.View {
  static initClass() {
    this.prototype.regions = {
      todoList: '.todo-list-container'
    };
  }
  get template() {
    return layoutTemplate;
  }
  get className() {
    return 'todo-app';
  }
  initialize() {
    this.todos = new Todos();
    this.todos.add([new Todo({message: 'hi mark'})])
    this.todos.add([new Todo({message: 'hi mark'})])
    this.todos.add([new Todo({message: 'hi mark'})])
  }
  onRender() {
    this.showTodoList(this.todos);
  }

  showTodoList() {
    this.showChildView('todoList', new TodoListView({ collection: this.todos}));
  }
}
AppLayout.initClass();
module.exports = AppLayout;
