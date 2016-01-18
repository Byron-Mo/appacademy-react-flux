var React = require('react'),
    ReactDOM = require('react-dom'),
    TodoList = require('./components/todo_list');

var MyComponent = React.createClass({
  render: function() {
    return(
      <div>
        <TodoList />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<MyComponent />, document.getElementById('root'));
});
