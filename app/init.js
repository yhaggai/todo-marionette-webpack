require ('./styles/application.less');
const TodoApp = require('./todo_application.js');
const $ = require('jquery');
const todoApp = new TodoApp();
const Marionette = require('backbone.marionette');
todoApp.start();
