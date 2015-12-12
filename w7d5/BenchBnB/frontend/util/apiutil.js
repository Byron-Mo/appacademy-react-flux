var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchBenches: function(bounds){
    $.get('/api/benches/', {bounds: bounds}, function(benches) {
      console.log(benches)
      ApiActions.receiveBenches(benches);
    })
  }
}

module.exports = ApiUtil;
