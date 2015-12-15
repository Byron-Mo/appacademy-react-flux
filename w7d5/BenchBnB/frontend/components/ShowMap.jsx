var React = require('react'),
    ReactDOM = require('react-dom');

var ShowMap = React.createClass({
  getInitialState: function() {
    return { marker: this.props.bench };
  },

  componentDidMount: function() {
    var marker = this.state.marker
    var map = ReactDOM(this.refs.map);
    var mapOptions = {
      center: {lat: marker.lat, lng: marker.lng},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);
    
  },

  addMarker: function() {
    var marker = this.state.marker;
    new google.maps.Marker({
      position: {lat: marker.lat, lng: marker.lng},
      map: this.map,
      title: marker.description
    })
  },

  render: function() {
    return(
      <div ref="map"></div>
    )
  }
});

module.exports = ShowMap;
