var Fluxxor = require('fluxxor');
var React = require('react');

var TodoStore = require('./stores/todo_store');
var constants = require('./constants');
var actions = require('./actions');
var Application = require('./components/application.jsx');

var stores = {
  TodoStore: new TodoStore()
}

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log('[Dispatch]', type, payload)
  }
});

React.render(<Application flux={flux} />, document.getElementById("app"));
