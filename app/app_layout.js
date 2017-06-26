const Marionette = require('backbone.marionette');
const layoutTemplate = require('./app_layout.jade');
const Todos = require('app/models/todos.js');
const TodoPage = require('./views/pages/todo_page/todo_page.js');

class AppLayout extends Marionette.View {
  getTemplate() {
    return layoutTemplate;
  }
  regions() {
    return {
      todoPage: { el: '.todo-page', replaceElement: true }
    };
  }
  className() {
    return 'todo-app';
  }
  onRender() {
    const todos = new Todos();
    return todos.fetch().then(() => {
      this.showChildView('todoPage', new TodoPage({ collection: todos }));
    });
  }
}
module.exports = AppLayout;
