const Marionette = require('backbone.marionette');
const template = require('./todo_nav_bar.jade');

class TodoNavBar extends Marionette.View {
  getTemplate() {
    return template;
  }
  className() {
    return 'todo-nav-bar';
  }
  ui() {}
  events() {}
}

module.exports = TodoNavBar;
