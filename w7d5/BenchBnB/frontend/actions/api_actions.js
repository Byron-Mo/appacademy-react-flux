var BenchConstants = require('../constants/bench_constants'),
    AppDispatcher = require('../dispatcher/dispatcher');

ApiActions = {
  receiveBenches: function(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = ApiActions;
