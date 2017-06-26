const Marionette = require('backbone.marionette');
const template = require('./checkbox.jade');

class Checkbox extends Marionette.View {
  get template() {
    return template;
  }
  className() {
    return 'checkbox';
  }

  templateContext() {
    return {
      id: this.model.cid
    };
  }
}

module.exports = Checkbox;
