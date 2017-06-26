const Backbone = require('backbone');
const Marionette = require('backbone.marionette');
const AppLayout = require('./app_layout.js');

class TodoApplication extends Marionette.Application {
  get region() {
    return { el: '.todo-app' };
  }
  onStart() {
    this.showView(new AppLayout());
  }
}
module.exports = TodoApplication;
