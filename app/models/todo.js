const Backbone = require('backbone');
const LocalStorage = require('backbone.localstorage').LocalStorage;

class Todo extends Backbone.Model {
  defaults() {
    return {
      done: false
    };
  }
}

module.exports = Backbone.Model.extend({
  localStorage: new LocalStorage('Todo')
});
