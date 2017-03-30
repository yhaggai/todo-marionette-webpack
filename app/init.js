import 'babel-polyfill';
require ('./styles/application.less');
const TodoApp = require('./todo_application.js');

const todoApp = new TodoApp();
$(document).ready(() => {
  todoApp.start()
});
