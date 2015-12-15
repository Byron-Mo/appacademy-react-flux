var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../util/apiutil');

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng,
      description: "",
      seating: ""
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    ApiUtil.createBench({
      lat: parseFloat(this.state.lat),
      lng: parseFloat(this.state.lng),
      seating: parseInt(this.state.seating),
      description: this.state.description
    });

    this.setState({ lat: "", lng: "", description: "", seating: "" })
    this.props.history.pushState(null, '/');
  },

  render: function() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Input Latitude: </label>
        <input type="integer" valueLink={this.linkState("lat")}></input>
        <br></br><br></br>
        <label>Input Longitude: </label>
        <input type="integer" valueLink={this.linkState("lng")}></input>
        <br></br><br></br>
        <label>Seating: </label>
        <input type="integer" valueLink={this.linkState("seating")}></input>
        <br></br><br></br>
        <label>Description: </label>
        <input type="text" valueLink={this.linkState("description")}></input>
        <br></br><br></br>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
});

module.exports = BenchForm;
