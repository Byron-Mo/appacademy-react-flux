var React = require('react'),
    Map = require('./map'),
    Index = require('./index'),
    FilterParamsStore = require('../stores/FilterParamsStore'),
    ApiUtil = require('../util/apiutil'),
    FilterSeats = require('./FilterSeats');

var Search = React.createClass({
  getInitialState: function() {
    return {
      bounds: '',
      min: '',
      max: ''
    };
  },

  updateState: function() {
    var param = FilterParamsStore.all();

    this.setState({
      bounds: param.bounds,
      min: param.min,
      max: param.max
    });
  },

  componentDidMount: function() {
    this.listener = FilterParamsStore.addListener(this.updateState);
    ApiUtil.fetchBenches(this.state.bounds, this.state.min, this.state.max);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  clickMapHandler: function(coords) {
    this.props.history.pushState(null, "benches/new", coords)
  },

  render: function() {
    return(
      <div>
        <Map clickMapHandler={this.clickMapHandler}/>
        <Index />
        <FilterSeats/>
      </div>
    )
  }
});

module.exports = Search;
