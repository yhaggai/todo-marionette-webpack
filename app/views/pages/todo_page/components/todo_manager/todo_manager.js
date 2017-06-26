const Marionette = require('backbone.marionette');

const AddTodoBar = require('./add_todo_bar/add_todo_bar.js');
const TodoList = require('./todo_list/todo_list.js');

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

  onRender() {
    this.showChildView('searchBar', new AddTodoBar());
    this.showChildView(
      'todoList',
      new TodoList({ collection: this.collection })
    );
  }

  onChildviewTodoInserted(todoValue) {
    this.collection.add({ value: todoValue }).save();
  }
}
module.exports = TodoManager;
