var React = require('react'),
    Display = require('./display.jsx'),
    Buttons = require('./buttons.jsx'),
    Splits = require('./splits.jsx');

var Watch = React.createClass({
  getInitialState: function() {
    return {elapsed: 0, running: false, splits: []};
  },
  tick: function() {
    if (this.state.running) {
      this.setState({elapsed: this.state.elapsed + .01});
    };
  },
  button1Pressed: function() {
    if (this.state.running) {
      var splits = this.state.splits;
      splits.push(this.state.elapsed.toFixed(2));
      this.setState({splits: splits});
    } else {
      this.setState({running: true})
    }
  },
  button2Pressed: function() {
    if (this.state.running) {
      this.setState({running: false});
    } else {
      this.setState({elapsed: 0, splits: []});
    }
  },
  componentDidMount: function() {
    setInterval(this.tick, 10);
  },
  render: function() {
    return (
      <div>
        <Display elapsed={this.state.elapsed.toFixed(2)}/>
        <Buttons
          running={this.state.running}
          button1Callback={this.button1Pressed}
          button2Callback={this.button2Pressed}
        />
        <Splits splits={this.state.splits}/>
      </div>
    );
  }
});

module.exports = Watch;
