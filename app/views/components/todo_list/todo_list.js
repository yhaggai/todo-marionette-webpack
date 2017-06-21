const Marionette = require('backbone.marionette');
const TodoItem = require('../todo_item/todo_item.js');

class TodoListView extends Marionette.CollectionView {
  get childView() {
    return TodoItem;
  }
  tagName() {
    return 'ul';
  }
  className() {
    return 'todo-items';
  }
}

module.exports = TodoListView;
