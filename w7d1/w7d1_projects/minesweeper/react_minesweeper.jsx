var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('./components/minesweeper.js');

var Game = React.createCalls({
  getInitialState: function() {
    return {board: new Minesweeper.Board()};
  },

  updateGame: function() {

  },

  render: function() {
    // return (
    //
    // )
  }
});
