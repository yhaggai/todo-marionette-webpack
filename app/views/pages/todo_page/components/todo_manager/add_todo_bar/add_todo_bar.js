const Marionette = require('backbone.marionette');
const template = require('./add_todo_bar.jade');

const ENTER_KEY = 13;

class AddTodoBar extends Marionette.View {
  getTemplate() {
    return template;
  }
  className() {
    return 'add-todo-bar';
  }
}

module.exports = AddTodoBar;
