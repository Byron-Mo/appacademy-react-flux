var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../util/apiutil');

var BenchForm = React.createClass({
  getInitialState: function() {
    return { lat: "", lng: "", description: "" };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    ApiUtil.createBench({
      lat: this.state.lat,
      lng: this.state.lng,
      description: this.state.description
    });

    this.setState({ lat: "", lng: "", description: "" })
  },

  render: function() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Input Latitude</label>
        <input type="text" valueLinked={this.linkState("lat")}></input>
        <br></br>
        <label>Input Longitude</label>
        <input type="text" valueLinked={this.linkState("lng")}></input>
        <br></br>
        <label>Description</label>
        <input type="text" valueLinked={this.linkState("description")}></input>
        <br></br>
        <submit type="submit" value="Submit"></submit>
      </form>
    )
  }
});

module.exports = BenchForm;
