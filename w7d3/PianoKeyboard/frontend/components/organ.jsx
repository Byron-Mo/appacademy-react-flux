var React = require('react'),
    KeyStore = require('../stores/KeyStore.js'),
    KeyListener = require('../util/KeyListener.js'),
    Key = require('./key.jsx'),
    Recorder = require('./Recorder.jsx');

var Organ = React.createClass({
  // getInitialState: function() {
  //   return { keys: KeyStore.all() };
  // },

  render: function() {
    return(
      <div className="organ">
        <Key noteName="C4" />
        <Key noteName="C#4"/>
        <Key noteName="D4"/>
        <Key noteName="D#4"/>
        <Key noteName="E4"/>
        <Key noteName="F4"/>
        <Key noteName="F#4"/>
        <Key noteName="G4"/>
        <Key noteName="G#4"/>
        <Key noteName="A4"/>
        <Key noteName="A#4"/>
        <Key noteName="B4"/>
        <Key noteName="C5"/>
        <br></br>
        <br></br>
        <Recorder/>
      </div>
    );
  }
});

module.exports = Organ;
