var React = require('react'),
    BenchForm = require('./BenchForm'),
    MarkerIndexItem = require('./markerindexitem');

var App = React.createClass({
  render: function() {
    return(
      <div>
        <header><h1>Bench Bnb</h1></header>
        // <MarkerIndexItem />
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
