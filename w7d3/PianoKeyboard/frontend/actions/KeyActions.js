var AppDispatcher = require('../dispatcher/Dispatcher.js');
    // KeyListener = require('../util/KyeListener.js');

var KeyAction = ({
  keyPress: function(key) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_KEYPRESS",
      keyPressed: key
    });
  },

  keyRelease: function(key) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_KEY_RELEASE",
      keyReleased: key
    });
  },

  keyPlayBack: function(key) {
    AppDispatcher.dispatch({
      actionType: "RECEIVED_KEY_PLAYBACK",
      key: key
    });
  }
});

module.exports = KeyAction;
