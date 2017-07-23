const Marionette = require('backbone.marionette');
const TodoManager = require('./components/todo_manager/todo_manager.js');
const template = require('./todo_page.jade');
const backgrid = require('backgrid');

class TodoPage extends Marionette.View {
  regions() {
    return {
      todoManager: '.todo_page__todo-manager'
    };
  }
  getTemplate() {
    return template;
  }
  className() {
    return 'todo-page';
  }
  onRender() {
    this.showChildView('todoManager', new TodoManager({ collection: this.collection }));
  }
}
module.exports = TodoPage;
