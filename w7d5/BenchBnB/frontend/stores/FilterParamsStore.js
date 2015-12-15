var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FilterParamsStore = new Store(AppDispatcher),
    ParamConstants = require('../constants/param_constants'),
    _params = {};

FilterParamsStore.all = function() {
  var dupParams = {};

  for (key in _params) {
    if (_params.hasOwnProperty(key)) {
      dupParams[key] = _params[key]
    }
  }
  return dupParams;
};

FilterParamsStore.addParam = function(min, max) {
  _params["min"] = min;
  _params["max"] = max;
};

FilterParamsStore.addBounds = function(bounds) {
  _params["bounds"] = bounds;

}

FilterParamsStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ParamConstants.ADD_PARAM:
      // FilterParamsStore.addBounds(payload.bounds)
      FilterParamsStore.addParam(payload.min, payload.max)
      FilterParamsStore.__emitChange()
      break;
    case ParamConstants.ADD_BOUNDS:
      FilterParamsStore.addBounds(payload.bounds)
      FilterParamsStore.__emitChange()
      break;
  }
}

module.exports = FilterParamsStore;
