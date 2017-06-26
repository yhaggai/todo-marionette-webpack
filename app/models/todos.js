const Backbone = require('backbone');
const LocalStorage = require('backbone.localstorage').LocalStorage;
const Todo = require('./todo.js');

class Todos extends Backbone.Collection {
  get model() {
    return Todo;
  }
}

module.exports = Todos.extend({
  localStorage: new LocalStorage('Todos')
});
