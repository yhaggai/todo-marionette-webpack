const Backbone = require('backbone');

class Todo extends Backbone.Model {
  defaults() {
    return {
      done: false
    };
  }
}
module.exports = Todo;
