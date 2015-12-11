var React = require('react');

var UserInput = React({
  render: function() {
    <input type="text" onKeyPress={this.props.searchString}>{this.props.searchString}</input>
  }
});

module.exports = React;
