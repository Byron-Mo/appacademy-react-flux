var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/apiutil'),
    BenchStore = require('./stores/benchstore'),
    // Index = require('./components/index'),
    Search = require('./components/search'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/App'),
    IndexRoute = require('react-router').IndexRoute,
    BenchForm = require('./components/BenchForm'),
    ShowMarker = require('./components/ShowMarker');

var BenchRouter = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="benches/new" component={BenchForm} />
      <Route
    </Route>
  </Router>
)

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(BenchRouter, document.getElementById('content'));
});
