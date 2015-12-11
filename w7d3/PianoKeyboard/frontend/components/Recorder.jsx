var React = require('react'),
    Track = require('../util/Track.js'),
    KeyStore = require('../stores/KeyStore.js'),
    Key = require('./key.jsx');

var Recorder = React.createClass({
  getInitialState: function() {
    return {isRecording: false, Track: new Track({})};
  },

  componentDidMount: function () {
    KeyStore.addListener( function () {
        if (this.state.isRecording) {
          this.state.Track.addNotes(KeyStore.all());
        }
      }.bind(this)
    );
  },

  handleStartRecording: function() {
    this.state.Track.startRecording();
    this.setState({isRecording: true});
  },

  handleStopRecording: function() {
    this.state.Track.stopRecording();
    this.setState({isRecording: false});
  },

  handlePlay: function() {
    this.state.Track.play();
  },

  render: function() {
    return (
      <div>
        <button onClick={this.handleStartRecording}>Start Recording</button>
        <button onClick={this.handleStopRecording}>Stop Recording</button>
        <button onClick={this.handlePlay}>Play</button>
      </div>
    );
  }
});

module.exports = Recorder;
