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

  regions() {
    return {
      doneButton: '.todo-item__checkbox'
    };
  }

  ui() {
    return {
      destroyButton: '.todo-item__delete',
      value: '.todo-item__value'
    };
  }
  // modelEvents() {
  //   return {
  //     change: 'render'
  //   };
  // }

  onRender() {
    // this._updateDoneState();
    this.showChildView('doneButton', new DoneCheckbox({ model: this.model }));
  }

  events() {
    return {
      'click @ui.destroyButton': () => this.model.destroy()
    };
  }

  onChildviewCheckboxChanged(checkState) {
    this.model.save({ done: checkState });
    this._updateDoneState();
  }

  _updateDoneState() {
    this.getUI('value').toggleClass(
      'todo-item__value--done',
      this.model.get('done')
    );
  }
}

module.exports = TodoItem;
