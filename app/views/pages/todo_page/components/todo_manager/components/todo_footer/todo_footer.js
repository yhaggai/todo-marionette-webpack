const Marionette = require('backbone.marionette');
const template = require('./todo_footer.jade');

class TodoFooter extends Marionette.View {
  getTemplate() {
    return template;
  }
  className() {
    return 'todo-footer';
  }
  ui() {}
  events() {
    return {};
  }
  templateContext() {
    const itemString = this.collection.length === 1 ? 'items' : 'item';
    return {
      todoCountMessage: `${this.collection.length} ${itemString} left`
    };
  }
}

module.exports = TodoFooter;
