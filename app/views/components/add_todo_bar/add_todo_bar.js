const Marionette = require('backbone.marionette');
const template = require('./add_todo_bar.jade');

class AddTodoBar extends Marionette.View {
  getTemplate() {
    return template;
  }
  className() {
    return 'add-todo-bar';
  }
}

module.exports = AddTodoBar;
