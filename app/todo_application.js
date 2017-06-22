const Backbone = require('backbone');
const Marionette = require('backbone.marionette');
const AppLayout = require('./app_layout.js');

class TodoApplication extends Marionette.Application {
  get region() {
    return '.todo-app';
  }
  onStart() {
    this.showView(new AppLayout());
    Backbone.history.start();
  }
}
module.exports = TodoApplication;