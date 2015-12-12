var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('../stores/benchstore'),
    ApiUtil = require('../util/apiutil');

var Map = React.createClass({
  getInitialState: function() {
    return { markers: []}
  },

  componentDidMount: function() {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    // add listener to add markers
    this.listener = BenchStore.addListener(this.addMarkers);

    // idle event
    this.listenForIdle();
  },

  componentWillUnmount: function() {
    BenchStore.removeListener(this.listener);
    this.removeMarkers();
  },

  listenForIdle: function() {
    var that = this;

    google.maps.event.addListener(this.map, 'idle', function() {
      var LatLngBounds = that.map.getBounds();
      var northEast = LatLngBounds.getNorthEast();
      var southWest = LatLngBounds.getSouthWest();
      var sLat = southWest.lat();
      var sLng = southWest.lng();
      var nLat = northEast.lat();
      var nLng = northEast.lng();
      this.bounds = {southWest: {sLat, sLng}, northEast: {nLat, nLng}};
      // debugger

      ApiUtil.fetchBenches({southWest: {sLat, sLng}, northEast: {nLat, nLng}});
    })
  },

  updateState: function() {
    this.setState({markers: BenchStore.all()})
  },

  addMarkers: function(){
    this.setState({markers: BenchStore.all()})
    var markers = this.state.markers;
    for (var i = 0; i < markers.length; i++) {
      new google.maps.Marker({
        position: {lat: markers[i].lat, lng: markers[i].lng},
        map: this.map,
        title: markers[i].description
      });
    }
  },

  removeMarkers: function() {
    var markers = this.state.markers;
    for (var i = 0; i < markers.length; i++) {
      marker[i].setMap(null);
    }
    this.setState({markers: []})
  },

  render: function() {

    return(
      <div className="map" ref="map"></div>
    )
  }
});

module.exports = Map;
