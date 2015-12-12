var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/apiutil'),
    BenchStore = require('./stores/benchstore'),
    // Index = require('./components/index'),
    Search = require('./components/search');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Search />, document.getElementById('content'));
});
