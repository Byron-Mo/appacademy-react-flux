var React = require('react');

var Input = React.createClass({
  getInitialState: function() {
    return {searchString: ""};
  },

  handleChange: function(e) {
    this.setState({searchString:e.target.value});
  },

  clickHandler: function(e) {
    this.setState({searchString:e.target.innerHTML});
  },

  render: function() {
    var nameList = this.props.names,
        searchString = this.state.searchString.trim().toLowerCase(),
        clickHandler = this.clickHandler;

    if (searchString.length > 0) {
      nameList = nameList.filter(function(l){
        return l.name.toLowerCase().match("^" + searchString);
      });
    }

    var list = nameList.map(function(l){
      return <li key={l.key} onClick={clickHandler}>{l.name}</li>;
    });

    return(
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
        <ul>
          {list}
        </ul>
      </div>
    );
  }
});

module.exports = Input;
