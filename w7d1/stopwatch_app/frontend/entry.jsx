var React = require('react'),
    ReactDOM = require('react-dom')
    Watch = require('./watch.jsx');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Watch/>,
    document.getElementById('root')
  );
});
