const Marionette = require('backbone.marionette');
const TodoItem = require('./todo_item/todo_item.js');

class TodoListView extends Marionette.CollectionView {
  get childView() {
    return TodoItem;
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
    debugger;
    this.collection.remove(model);
  }
}

module.exports = TodoListView;
