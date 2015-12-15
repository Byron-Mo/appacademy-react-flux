var React = require('react'),
    BenchStore = require('../stores/benchstore'),
    History = require('react-router').History,
    ShowMap = require('./ShowMap');

var ShowMarker = React.createClass({
  // getInitialState: function() {
  //   return { bench: BenchStore.fetchBench() }
  // },
  //
  // updateState: function() {
  //   this.setState({ bench: BenchStore.fetchBench() })
  // },
  //
  // componentDidUpdate: function() {
  //
  // },

  render: function() {
    return(
      <div>
        <h1>{this.props.bench.description}</h1>
        <br></br>
        Seats: {this.props.bench.seating}
        <br></br>
        <ShowMap bench={this.props.bench}/>
      </div>
    )
  }
});

module.exports = ShowMarker;
