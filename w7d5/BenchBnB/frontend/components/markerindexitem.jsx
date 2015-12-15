var React = require('react'),
    BenchStore = require('../stores/benchstore'),
    ApiUtil = require('../util/apiutil'),
    History = require('react-router').History;

var MarkerIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    var url = "benches/" + (this.props.benches.id);
    this.history.push(url);
  },

  render: function() {
    return(
      <div></div>
    )
  }
});

module.exports = MarkerIndexItem;
