  var Key = require('../components/key.jsx'),
      KeyStore = require('../stores/KeyStore'),
      KeyAction = require('../actions/KeyActions.js');


var Track = function(attributes) {
  this.trackName = attributes.trackName;
  this.roll = attributes.roll;
};

Track.prototype.startRecording = function() {
  this.roll = [];
  this.recordingTime = new Date();
  this.interval;
};

Track.prototype.addNotes = function (playingNotes) {
  var time = new Date();
  var snapShot = {
    timeSlice: (time.getTime() - this.recordingTime.getTime()),
    notes: playingNotes
  };
  this.roll.push(snapShot);
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
  console.log(this.roll )
};

Track.prototype.play = function() {
  if (this.interval) {
    return;
  } else {
    var playbackStartTime = Date.now();
    var currentNote = 0;
    this.interval = setInterval(function() {
      if (currentNote < this.roll.length) {
        if ((Date.now() - playbackStartTime) >= (this.roll[currentNote].timeSlice)) {
          var notes = this.roll[currentNote].notes || [];
          KeyAction.keyPlayBack(notes)
          currentNote++;
        } else {

        }
      } else {
        clearInterval(this.interval);
        this.interval = null;
      }
    }.bind(this), 10);
  }
  // count = 0
  // while (count < this.roll.length ) {
  //   if ( Date.now() - playBackStarttime > timeSlice ) {
  //     count ++
  //
  //   }
  // }
};

module.exports = Track;
