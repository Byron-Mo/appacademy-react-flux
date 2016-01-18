var React = require('react'),
    TodoStore = require('../stores/todo_store');

var DoneButton = React.createClass({
  handleDone: function() {
    var id = this.props.listItem.id;
    TodoStore.toggleDone(id);

  },

  render: function() {
    var item = this.props.listItem;
    var label = 'Done';
    if (item.done) {
      label = 'Undo';
    }
    return(
      <button onClick={this.handleDone}>{label}</button>
    );
  }
});

module.exports = DoneButton;
