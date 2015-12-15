var React = require('react'),
    BenchForm = require('./BenchForm');

var App = React.createClass({
  render: function() {
    return(
      <div>
        <header><h1>Bench Bnb</h1></header>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
