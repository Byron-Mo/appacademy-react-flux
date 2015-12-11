var React = require('react'),
    Organ = require('./organ.jsx'),
    KeyStore = require('../stores/KeyStore.js'),
    Note = require('../util/Note.js'),
    TONES = require('../constants/Tones.js');

var Key = React.createClass({
  getInitialState: function () {
    return {keys: KeyStore.all()};
  },

  _keyChange: function() {
    this.setState({keys: KeyStore.all()});
    this.isPlaying() === true ? this.note.start() : this.note.stop();
  },

  componentDidMount: function() {
    this.listener = KeyStore.addListener(this._keyChange);
    var tone = TONES[this.props.noteName];
    this.note = new Note(tone);
    // debugger
  },

  componentWillUnmount: function() {
    KeyStore.removeListener(this.listener);
  },

  isPlaying: function () {
    var note = this.props.noteName;
    var currentNotes = this.state.keys;
    if (currentNotes.indexOf(note) !== -1) {
      console.log("Playing");
      this.playing = true;
      return true;
    } else {
      this.playing = false;
      return false;
    }
  },

  render: function () {
    var playing = (this.playing === true? 'yes' : '');
    var list = (this.playing === true ? <p><b>{this.props.noteName}</b></p> : <p>{this.props.noteName}</p>);
    return (
      <div className='key' id={playing}>{list}</div>
    );
  }
});

module.exports = Key;
