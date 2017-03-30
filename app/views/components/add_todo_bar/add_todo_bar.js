const Marionette = require('backbone.marionette');
const template = require('./add_todo_bar.jade');

class AddTodoBar extends Marionette.View {
  get template() {
    return template;
  }
  get className() {
    return 'add-todo-bar';
  }
}

module.exports = AddTodoBar;
