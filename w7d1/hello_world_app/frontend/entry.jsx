var React = require('react');
var ReactDOM = require('react-dom');
var MyComponent = require('./hello_world.jsx');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent/>, document.getElementById('main'));
  // ReactDOM.render(
  //   React.createElement(MyComponent, {}),
  //   document.getElementById('main')
  // );
  // ReactDOM.render(React.createElement('span', {}, "hello"), document.getElementById('main'));
});
