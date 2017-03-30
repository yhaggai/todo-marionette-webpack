import 'babel-polyfill';
const TodoApp = require('./todo_application.js');

const todoApp = new TodoApp();
$(document).ready(() => {
  todoApp.start()
});
