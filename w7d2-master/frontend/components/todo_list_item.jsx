var React = require('react'),
    TodoDetailView = require('./todo_detail_view'),
    DoneButton = require('./done_button');

var TodoListItem = React.createClass({
  getInitialState: function () {
    return {viewToggle: false};
  },

  handleClick: function () {
    this.setState({viewToggle: !this.state.viewToggle});
  },

  render: function () {
    var item = this.props.listItem;
    var details = this.state.viewToggle ?
                    <TodoDetailView listItem={item} /> : "";

    return (
      <div key={this.props.key}>
        <div onClick={this.handleClick}><b>{item.title}</b></div>
        <DoneButton listItem={item} />
        {details}
      </div>
    );
  }
});

module.exports = TodoListItem;
