const Marionette = require('backbone.marionette');
const TodoItem = require('./todo_item/todo_item.js');
const TodoListEmpty = require('./todo_list_empty/todo_list_empty.js');

class TodoListView extends Marionette.CollectionView {
  get childView() {
    return TodoItem;
  }

  className() {
    return 'todo-items';
  }
}
module.exports = TodoListView;
