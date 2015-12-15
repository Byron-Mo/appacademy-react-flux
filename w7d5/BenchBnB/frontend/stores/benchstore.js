var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants'),
    _benches = [],
    BenchStore = new Store(AppDispatcher);

BenchStore.all = function() {
  return _benches.slice();
};

BenchStore.resetBenches = function(benches) {
  _benches = benches;
  BenchStore.__emitChange();
};

BenchStore.createBench = function(bench) {
  _benches.push(bench);
  BenchStore.__emitChange();
},

BenchStore.resetBench = function(bench) {
  _benches.push(bench);
  BenchStore.__emitChange()
},

BenchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      BenchStore.resetBenches(payload.benches);
      break;
    case BenchConstants.CREATE_BENCH:
      BenchStore.createBench(payload.bench);
      break;
    case BenchConstants.RECEIVE_BENCH:
      BenchStore.fetchBench(payload.bench);
      break;
  }
}


module.exports = BenchStore;
