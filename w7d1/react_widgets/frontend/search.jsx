var React = require('react');
    UserInput = require('./user_input.jsx')

var Search = React.createClass({
  getInitialState: function() {
    return {stringSearch: ""}
  },
  handleChange: function(e) {
    this.setState({searchString: e.target.value})
  },
  render: function() {
    var list = this.props.items,
        searchString = this.state.searchString.trim().toLowerCase();

    return (
      <div>
        <UserInput searchString={this.state.searchString}/>
      </div>
    );
  }
});



module.exports = Search;
