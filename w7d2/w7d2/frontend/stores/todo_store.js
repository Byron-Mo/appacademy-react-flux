var _todos = {},
    _callbacks = [];

var TodoStore = {
  changed: function () {
    _callbacks.forEach(function (callback) {
      callback();
    });
  },

  addChangeHandler: function (callback) {
    _callbacks.push(callback);
  },

  removeChangeHandler: function (callback) {
    var index = null;
    for (var i = 0; i < _callbacks.length; i++) {
      if (_callbacks[i] === callback) {
        index = i;
      }
    }

    if (index !== null) {
      _callbacks.splice(index, 1);
    }
  },

  all: function () {
    return $.extend({}, _todos);
  },

  fetch: function () {
    $.get('api/todos', {}, function(todos) {
      _todos = {};
      todos.forEach(function(todo) {
        _todos[todo.id] = todo;
      });
      TodoStore.changed();
    });
  },

  create: function (data) {
    $.post('api/todos', {todo: data}, function (todo) {
      _todos[todo.id] = todo;
      TodoStore.changed();
    });
  },

  destroy: function (id) {
    if (_todos[id]) {
      $.ajax({
        url: 'api/todos/' + id,
        type: 'DELETE',
        success: function() {
          delete(_todos[id]);
          TodoStore.changed();
        }
      });
    }
  },

  toggleDone: function (id) {
    if (_todos[id]) {
      $.ajax({
        url: 'api/todos/' + id,
        type: 'PATCH',
        data: {todo: {done: !_todos[id].done}},
        success: function(todo) {
          _todos[todo.id] = todo;
          TodoStore.changed();
        }
      });
    }
  }
};

module.exports = TodoStore;
