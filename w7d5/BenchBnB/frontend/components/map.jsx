var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('../stores/benchstore'),
    ApiUtil = require('../util/apiutil'),
    FilterActions = require('../actions/filter_actions'),
    FilterParamsStore = require('../stores/FilterParamsStore');

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
    this.handleClick();
  },

  componentWillUnmount: function() {
    this.listener.remove();
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

      this.bounds = {
        southWest: {sLat, sLng},
        northEast: {nLat, nLng}
      };

      FilterActions.addBounds(this.bounds)

      // console.log(FilterParamsStore.all())
      // min = FilterParamsStore.all().min;
      // max = FilterParamsStore.all().max;
      //
      // ApiUtil.fetchBenches({southWest: {sLat, sLng}, northEast: {nLat, nLng}}, min, max);
    })
  },

  updateState: function() {
    this.setState({markers: BenchStore.all()})
  },

  addMarkers: function(){
    this.setState({markers: BenchStore.all()})
    this.markers = []
    var markers = this.state.markers;
    for (var i = 0; i < markers.length; i++) {
      this.markers.push(new google.maps.Marker({
        position: {lat: markers[i].lat, lng: markers[i].lng},
        map: this.map,
        title: markers[i].description
      }));
    }

  },

  // removeMarkers: function() {
  //   var markers = this.state.markers;
  //   for (var i = 0; i < markers.length; i++) {
  //     marker[i].setMap(null);
  //   }
  //   this.setState({markers: []})
  // },

  handleClick: function() {
    var that = this;

    google.maps.event.addListener(this.map, "click", function(event) {
      var latitude = event.latLng.lat();
      var longitude = event.latLng.lng();

      var coords = {
        lat: latitude,
        lng: longitude
      };

      that.props.clickMapHandler(coords)
    });
  },

  render: function() {
    return(
      <div className="map" ref="map" ></div>
    )
  }
});

module.exports = Map;
