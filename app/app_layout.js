const Marionette = require('backbone.marionette');
const layoutTemplate = require('./app_layout.jade');
const Todos = require('./models/todos.js');
const Todo = require('./models/todo.js');
const AddTodoBar = require('./views/components/add_todo_bar/add_todo_bar.js');
const TodoList = require('./views/components/todo_list/todo_list.js');

class AppLayout extends Marionette.View {
  static initClass() {
    this.prototype.regions = {
      searchBar: '.search-bar-container',
      todoList: '.todo-list-container'
    };
  }
  getTemplate() {
    return layoutTemplate;
  }
  className() {
    return 'todo-app';
  }
  initialize() {
    this.todos = new Todos();
    this.todos.add([new Todo({message: 'hi mark'})])
    this.todos.add([new Todo({message: 'hi mark'})])
    this.todos.add([new Todo({message: 'hi mark'})])
  }
  onRender() {
    // this.showChildView('searchBar', new AddTodoBar());
    this.showChildView('todoList', new TodoList({ collection: this.todos}));
  }
}
AppLayout.initClass();
module.exports = AppLayout;
