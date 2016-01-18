var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    TodoListItem = require('./todo_list_item'),
    TodoForm = require('./todo_form');

var TodoList = React.createClass({
  getInitialState: function() {
    return { todoList: TodoStore.all() };
  },

  componentDidMount: function(){
    TodoStore.addChangeHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function(){
    TodoStore.removeChangeHandler(this.todosChanged);
  },

  todosChanged: function(){
    this.setState({ todoList: TodoStore.all() });
  },

  render: function() {
    var lists = [];
    for(var i in this.state.todoList) {
      if (this.state.todoList.hasOwnProperty(i)) {
        var item = this.state.todoList[i];
        lists.push(<TodoListItem listItem={item} key={i}/>);
        // lists.push(<li key={i}>{this.state.todoList[i].title}</li>);
      }
    }

    return (
      <div>
        {lists}
        <TodoForm />
      </div>
    );
  }
});

module.exports = TodoList;
