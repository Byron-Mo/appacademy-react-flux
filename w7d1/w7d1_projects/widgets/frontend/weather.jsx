var React = require('react');

var Weather = React.createClass({
  render: function() {
    if(!this.props.weather){
      return (<div></div>);
    } else {
      return (
        <section>
          <div>{this.props.weather.main.temp}</div>
          <div>{this.props.weather.weather[0].main}</div>  
        </section>
      );
    }
  }

});

module.exports = Weather;
