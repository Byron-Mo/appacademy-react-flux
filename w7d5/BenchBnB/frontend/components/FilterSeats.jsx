var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    FilterActions = require('../actions/filter_actions');

var FilterSeats = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { min: '', max: '' }
  },

  handleSubmit: function(e) {
    e.preventDefault();

    FilterActions.addParam(this.state.min, this.state.max);

    this.setState({ min: "", max: "" });
  },

  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Minimum Seats: </label>
        <input type="integer" valueLink={this.linkState("min")}></input>
        <br></br>
        <label>Maximum Seats: </label>
        <input type="integer" valueLink={this.linkState("max")}></input>
        <br></br>
        <input type="submit" value="Update"></input>
      </form>
    )
  }
});

module.exports = FilterSeats;
