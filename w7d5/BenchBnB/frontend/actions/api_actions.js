var BenchConstants = require('../constants/bench_constants'),
    AppDispatcher = require('../dispatcher/dispatcher');

ApiActions = {
  receiveBenches: function(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  createBench: function(bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.CREATE_BENCH,
      bench: bench
    })
  }
};


module.exports = ApiActions;
