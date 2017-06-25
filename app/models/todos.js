const Backbone = require('backbone');
const Todo = require('./todo.js');

class Todos extends Backbone.Collection {
  get model() {
    return Todo;
  }
  get comparator() {
    return 'created';
  }
}

module.exports = Todos;
