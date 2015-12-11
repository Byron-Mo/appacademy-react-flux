var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchBenches: function(){
    $.get('/api/benches/', {}, function(benches) {
      ApiActions.receiveBenches(benches);
    })
  }
}

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
