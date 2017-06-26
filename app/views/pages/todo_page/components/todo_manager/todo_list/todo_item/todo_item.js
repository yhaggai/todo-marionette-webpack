const Marionette = require('backbone.marionette');
const template = require('./todo_item.jade');
const DoneCheckbox = require('./done_checkbox/done_checkbox.js');

class TodoItem extends Marionette.View {
  getTemplate() {
    return template;
  }
  className() {
    return 'todo-item';
  }

  ui() {
    return {
      destroyButton: '.todo-item__delete'
    };
  }

  // triggers() {
  //   return {
  //     'click @ui.destroyButton': 'item:remove'
  //   };
  // }
  events() {
    return {
      'click @ui.destroyButton': () => this.model.destroy()
    };
  }
}

module.exports = TodoItem;
