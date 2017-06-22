const Marionette = require('backbone.marionette');
const layoutTemplate = require('./app_layout.jade');
const TodoPage = require('./views/pages/todo_page/todo_page.js');

class AppLayout extends Marionette.View {
  getTemplate() {
    return layoutTemplate;
  }
  regions() {
    return {
      todoPage: { el: '.todo-page', replaceElement: true },
    };
  }
  className() {
    return 'todo-app';
  }

  onRender() {
    this.showChildView('todoPage', new TodoPage());
  }
}
module.exports = AppLayout;
