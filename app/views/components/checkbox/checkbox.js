const Marionette = require('backbone.marionette');
const template = require('./checkbox.jade');

class Checkbox extends Marionette.View {
  get template() {
    return template;
  }
  className() {
    return 'checkbox';
  }
  ui() {
    return { checkbox: 'input' };
  }

  events() {
    return {
      'click @ui.checkbox': 'checkBoxChanged'
    };
  }
  checkBoxChanged() {
    this.triggerMethod(
      'checkbox:changed',
      this.getUI('checkbox').is(':checked')
    );
  }

  templateContext() {
    return {
      id: this.model.cid
    };
  }
}

module.exports = Checkbox;
