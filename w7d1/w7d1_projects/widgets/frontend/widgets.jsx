var React = require('react'),
    ReactDOM = require('react-dom'),
    Input = require('./inputs.jsx'),
    WeatherClock = require('./weatherclock.jsx'),
    Tab = require('./tab.jsx');

var nameList = [
  {key: 1, name: "Bobby"},
  {key: 2, name: "Johnny Boy"},
  {key: 3, name: "Big Moe"},
  {key: 4, name: "Fat Joseph"},
  {key: 5, name: "El Chapo"},
  {key: 6, name: "Count of Essex"},
  {key: 7, name: "Thomas The Train"}

];

var tabList = [
  {key: 0, title: "a", content: "aaa"},
  {key: 1, title: "b", content: "bbb"},
  {key: 2, title: "c", content: "ccc"},
  {key: 3, title: "d", content: "ddd"},
  {key: 4, title: "e", content: "eee"},
  {key: 5, title: "f", content: "fff"}
];

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Tab tabs={tabList}/>, document.getElementById('tab'));
  ReactDOM.render(<Input names={nameList}/> , document.getElementById('input'));
  ReactDOM.render(<WeatherClock/>, document.getElementById('clock'));
});
