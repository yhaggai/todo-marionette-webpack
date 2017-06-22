const Marionette = require('backbone.marionette');

const Todos = require('app/models/todos.js');
const AddTodoBar = require('./components/add_todo_bar/add_todo_bar.js');
const TodoList = require('./components/todo_list/todo_list.js');

const template = require('./todo_manager.jade');

class TodoManager extends Marionette.View {
  regions() {
    return {
      searchBar: { el: '.search-bar', replaceElement: true },
      todoList: { el: '.todo-list', replaceElement: true }
    };
  }

  getTemplate() {
    return template;
  }

  className() {
    return 'todo-manager';
  }

  initialize() {
    this.todos = new Todos();
    this.todos.add({ value: 'himark' });
  }

  onRender() {
    this.showChildView('searchBar', new AddTodoBar());
    this.showChildView('todoList', new TodoList({ collection: this.todos }));
  }

  onChildviewTodoInserted(todoValue) {
    this.todos.add({ value: todoValue });
  }
}
module.exports = TodoManager;
