// const _ = require('lodash');
import { tap, template } from 'lodash';
const Marionette = require('backbone.marionette');
const template = require('./todo_page.jade');

const Todos = require('./models/todos.js');
const Todo = require('./models/todo.js');
const AddTodoBar = require('./views/components/add_todo_bar/add_todo_bar.js');
const TodoList = require('./views/components/todo_list/todo_list.js');

class TodoPage extends Marionette.View {
  regions() {
    return {
      searchBar: '.search-bar-container',
      todoList: '.todo-list-container'
    };
  }
  getTemplate() {
    return template;
  }
  className() {
    return 'todo-page';
  }
  initialize() {
    this.todos = new Todos();
    this.todos.add([new Todo({ message: 'hi mark' })]);
    this.todos.add([new Todo({ message: 'hi mark' })]);
    this.todos.add([new Todo({ message: 'hi mark' })]);
  }
  onRender() {
    this.showChildView('searchBar', new AddTodoBar());
    this.showChildView('todoList', new TodoList({ collection: this.todos }));
  }
}
module.exports = TodoPage;
