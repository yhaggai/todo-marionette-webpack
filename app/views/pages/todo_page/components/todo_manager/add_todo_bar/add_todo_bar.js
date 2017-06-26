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
  ui() {
    return { textBox: '.add-todo-bar__text-box' };
  }
  events() {
    return {
      'keydown @ui.textBox': 'onEditKeypress'
    };
  }
  onEditKeypress({ keyCode }) {
    if (keyCode === ENTER_KEY) {
      const todoValue = this.getUI('textBox').val().trim();
      this.getUI('textBox').val('');
      if (todoValue) {
        this.trigger('todo:inserted', todoValue);
      }
    }
  }
}

module.exports = AddTodoBar;
