var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/apiutil'),
    BenchStore = require('./stores/benchstore'),
    // Index = require('./components/index'),
    Search = require('./components/search'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/App'),
    IndexRoute = require('react-router').IndexRoute;

var BenchRouter = (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Search}/>
    </Route>
  </Router>
)

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(BenchRouter, document.getElementById('content'));
});
