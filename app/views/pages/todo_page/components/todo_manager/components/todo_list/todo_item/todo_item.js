const Marionette = require('backbone.marionette');
const template = require('./todo_item.jade');
const DoneCheckbox = require('./done_checkbox/done_checkbox.js');

class TodoItem extends Marionette.View {
  getTemplate() {
    return template;
  }

  ui() {
    return {
      destroyButton: '.todo-item__delete',
      value: '.todo-item__value',
      editBox: '.todo-item__edit-box'
    };
  }
  events() {
    return {
      'dblclick @ui.value': '_switchToEditMode',
      'focusout @ui.editBox': '_switchToShowMode'
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
    return {
      change: 'render'
    };
  }

  className() {
    return 'todo-item';
  }

  onRender() {
    this.setDoneState();
    this.showChildView('checkbox', new DoneCheckbox({ model: this.model }));
  }

  onChildviewCheckboxChanged(checkState) {
    this.model.set({ done: checkState });
  }

  setDoneState() {
    this.$el.toggleClass(`${this.className()}--done`, this.model.get('done'));
  }

  _switchToEditMode() {
    const editBoxElement = this.getUI('editBox');
    editBoxElement.val(this.model.get('value'));
    this.$el.addClass(`${this.className()}--edit`);
    editBoxElement.focus();
  }
  _switchToShowMode() {
    const newValue = this.getUI('editBox').val();
    this.model.set({ value: newValue });
    this.$el.removeClass(`${this.className()}--edit`);
  }
}

module.exports = TodoItem;
