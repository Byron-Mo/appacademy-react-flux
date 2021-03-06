var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchBenches: function(bounds, min, max){
    $.get('/api/benches/', {bounds: bounds, min: min, max: max}, function(benches) {
      ApiActions.receiveBenches(benches);
    })
  },

  createBench: function(data) {
    $.post('/api/benches', {bench: data}, function(bench) {
      ApiActions.createBench(bench);
    })
  },

  fetchBench: function(id) {
    $.get('/api/benches/' + id, {}, function(bench) {
      ApiActions.receiveBench(bench);
    })
  }
}

module.exports = ApiUtil;
