var React = require('react');

var Tab = React.createClass({
  getInitialState: function() {
    return {tabIndex: 0};
  },

  handleClick: function(index) {
    this.setState({tabIndex: index});
  },

  render: function () {
    var tabList = this.props.tabs;
    var tabIndex = this.state.tabIndex;
    var handleClick = this.handleClick;
    var that = this;
    return (
      <main>
        {tabList.map(function(item, index) {
          return index === tabIndex ?
            (<header onClick={handleClick.bind(that, index)}>
              <b>{item.title}</b>
            </header>) :
            <header onClick={handleClick.bind(that, index)}>
              {item.title}
            </header>;
        })}
        {tabList.map(function(item, index) {
          return index === tabIndex ?
            (<section>{item.content}</section>) :
            (<section></section>);
        })}
      </main>
    );
  }
});

module.exports = Tab;
