var React = require('react'),
    BenchStore = require('../stores/benchstore'),
    ApiUtil = require('../util/apiutil'),
    ShowMarker = require('./ShowMarker');

var Index = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  updateState: function() {
    this.setState({benches: BenchStore.all()});
  },

  componentDidMount: function() {
    this.listener = BenchStore.addListener(this.updateState);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  handleClick: function(e) {

  },

  render: function() {
    var that = this;

    var benches = this.state.benches.map(function(bench) {
      return <li key={bench.description} onClick={that.handleClick}>
        {bench.description}
      </li>;
    });

    return(
      <div>
        <ul>
          {benches}
        </ul>
      </div>
    )
  }
});

module.exports = Index;
