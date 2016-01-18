var React = require('react'),
    TodoStore = require('../stores/todo_store');

var TodoDetailView = React.createClass ({
  handleDestroy: function() {
    TodoStore.destroy(this.props.listItem.id);
  },

  render: function () {
    return (
      <div className="deets">
        <div>{this.props.listItem.body}</div>
        <button onClick={this.handleDestroy}>Delete</button>
      </div>
    );
  }
});

module.exports = TodoDetailView;
