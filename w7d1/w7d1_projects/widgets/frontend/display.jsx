var React = require ('react');

var Display = React.createClass( {



  render: function() {

    var timeNow = this.props.currentTime.toString();

    return (
      <div>{timeNow}</div>
    );
  }

});



module.exports = Display;
