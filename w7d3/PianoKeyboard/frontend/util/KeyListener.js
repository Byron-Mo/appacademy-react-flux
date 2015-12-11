var AppDispatcher = require('../dispatcher/Dispatcher.js'),
    // KeyStore = require('../stores/KeyStore.js');
    KeyAction = require('../actions/KeyActions.js');

var Mapping = {
  81: 'C4',
  87: 'C#4',
  69: 'D4',
  82: 'D#4',
  84: 'E4',
  89: 'F4',
  85: 'F#4',
  73: 'G4',
  79: 'G#4',
  80: 'A4',
  219: 'A#4',
  221: 'B4',
  220: 'C5'
};

var KeyListener = ({
  handleKeyDown: function() {
    $(document).on("keydown", function(e) {
      var key = Mapping[e.keyCode];
      if (key) {
        KeyAction.keyPress(key);
      }
    });
  },

  handleKeyUp: function() {
    $(document).on("keyup", function(e) {
      var key = Mapping[e.keyCode];
      KeyAction.keyRelease(key);
    });
  }
});

module.exports = KeyListener;
