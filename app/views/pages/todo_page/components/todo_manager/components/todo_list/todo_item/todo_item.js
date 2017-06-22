const Marionette = require('backbone.marionette');
const template = require('./todo_item.jade');
const DoneCheckbox = require('./done_checkbox/done_checkbox.js');

class TodoItem extends Marionette.View {
  getTemplate() {
    return template;
  }

  ui() {
    return {
      destroyButton: '.todo-item__delete'
    };
  }

  triggers() {
    return {
      'click @ui.destroyButton': 'item:remove'
    };
  }

  regions() {
    return {
      checkbox: '.todo-item__checkbox'
    };
  }

  modelEvents() {
    return { 'change:done': 'updateDoneState' };
  }

  className() {
    return 'todo-item';
  }

  onRender() {
    this.showChildView('checkbox', new DoneCheckbox({ model: this.model }));
  }

  onChildviewCheckboxChanged(checkState) {
    this.model.set({ done: checkState });
  }

  updateDoneState() {
    this.$el.toggleClass(`${this.className()}--done`, this.model.get('done'));
  }
}

module.exports = TodoItem;
