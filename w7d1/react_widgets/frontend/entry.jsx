var React = require('react'),
    ReactDOM = require('react-dom'),
    Search = require('./search.jsx');

var list = [
  {name: 'Jane'},
  {name: 'David'},
  {name: 'Abe'},
  {name: 'Byron'},
  {name: 'Eugene'},
  {name: 'Steph'},
  {name: 'Sheri'},
  {name: 'Kyle'},
  {name: 'Marcus'},
  {name: 'Chris'},
];

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Search items={list}/>,
    document.getElementById('root')
  )
})
