const Marionette = require('backbone.marionette');
const template = require('./todo_item.jade');

class TodoItem extends Marionette.View {
  get template() {
    return template;
  }
  get className() {
    return 'todo-item';
  }
  get tagName() {
    return 'li';
  }
}

module.exports = TodoItem;
