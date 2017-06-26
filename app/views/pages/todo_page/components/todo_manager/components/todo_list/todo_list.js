const Marionette = require('backbone.marionette');
const TodoItem = require('./todo_item/todo_item.js');
const TodoListEmpty = require('./todo_list_empty/todo_list_empty.js');

class TodoListView extends Marionette.CollectionView {
  get childView() {
    return TodoItem;
  }
  emptyView() {
    return TodoListEmpty;
  }
  childViewTriggers() {
    return {
      'item:remove': 'child:item:remove'
    };
  }

  className() {
    return 'todo-items';
  }

  onChildItemRemove({ model }) {
    this.collection.remove(model);
  }
}

module.exports = TodoListView;
