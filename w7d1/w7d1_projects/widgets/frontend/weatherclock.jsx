var React = require('react');
var Display = require('./display.jsx');
var Weather = require('./weather.jsx');

var WeatherClock = React.createClass({

  getInitialState: function() {
    return {currentTime: new Date(), weather: "" };
  },

  tick: function(){
    this.state.currentTime.setSeconds(this.state.currentTime.getSeconds() + 1);
    this.setState({currentTime: this.state.currentTime});
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);

    var success = function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      var request = new XMLHttpRequest();
      request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=645c5d39c7603f17e23fcaffcea1a3c1', true);
      request.onload = function() {
        var resp = JSON.parse(request.responseText);
        this.setState({weather: resp});
      }.bind(this);
      request.send();
    }.bind(this);

    navigator.geolocation.getCurrentPosition(success);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
    this.interval = 0;
  },

  render: function() {
    return (
      <div>
      <Display currentTime = {this.state.currentTime}/>
      <Weather weather={this.state.weather} />
      </div>
    );
  }
});

module.exports = WeatherClock;
