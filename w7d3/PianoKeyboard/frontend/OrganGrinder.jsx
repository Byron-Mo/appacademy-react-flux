var React = require('react'),
    ReactDOM = require('react-dom'),
    Organ = require('./components/organ.jsx'),
    KeyListener = require('./util/KeyListener.js');

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  ReactDOM.render(<Organ/>, root);
  KeyListener.handleKeyUp();
  KeyListener.handleKeyDown();
});
