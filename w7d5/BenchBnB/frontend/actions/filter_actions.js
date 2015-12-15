var AppDispatcher = require('../dispatcher/dispatcher'),
    ParamConstants = require('../constants/param_constants');

var FilterActions = {
  addParam: function(min, max) {
    AppDispatcher.dispatch({
      actionType: ParamConstants.ADD_PARAM,
      min: min,
      max: max
    })
  },

  addBounds: function(bounds) {
    AppDispatcher.dispatch({
      actionType: ParamConstants.ADD_BOUNDS,
      bounds: bounds
    })
  }
};

module.exports = FilterActions
