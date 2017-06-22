const Backbone = require('backbone');
const Todo = require('./todo.js');
const LocalStorage = require('backbone.localstorage').LocalStorage;

class Todos extends Backbone.Collection {
  get model() {
    return Todo;
  }
  get comparator() {
    return 'created';
  }
}

module.exports = Backbone.Collection.extend({
  localStorage: new LocalStorage('Todos')
});
