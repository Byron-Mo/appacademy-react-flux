var AppDispatcher = require('../dispatcher/Dispatcher.js'),
    Store = require('flux/utils').Store,
    _keysBeingPlayed = [],
    KeyStore = new Store(AppDispatcher);

KeyStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "RECEIVE_KEYPRESS":
      addKeyPress(payload.keyPressed);
      break;
    case "RECEIVE_KEY_RELEASE":
      removeKeyReleased(payload.keyReleased);
      break;
    case "RECEIVED_KEY_PLAYBACK":
      groupUpdate(payload.key);
      break;
  }
};

KeyStore.all = function() {
  return _keysBeingPlayed.slice();
};

var addKeyPress = function (keyPressed) {
  var idx = _keysBeingPlayed.indexOf(keyPressed);
  if (idx === -1) {
    _keysBeingPlayed.push(keyPressed);
    KeyStore.__emitChange();
  }
  console.log(_keysBeingPlayed);
};

var removeKeyReleased = function (keyReleased) {
  var idx = _keysBeingPlayed.indexOf(keyReleased);
  _keysBeingPlayed.splice(idx, 1);
  KeyStore.__emitChange();
  console.log(_keysBeingPlayed);
};

var groupUpdate = function(key) {
  _keysBeingPlayed = key.slice()
  KeyStore.__emitChange();
}

module.exports = KeyStore;
