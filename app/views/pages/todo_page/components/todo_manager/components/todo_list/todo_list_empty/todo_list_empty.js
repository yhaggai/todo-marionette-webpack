const Marionette = require('backbone.marionette');
const template = require('./todo_list_empty.jade');

class TodoListEmpty extends Marionette.View {
  getTemplate() {
    return template;
  }
}

module.exports = TodoListEmpty;
