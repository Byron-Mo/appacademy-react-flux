var React = require ('react');

var Tabhead = React.createClass({
  render: function () {
    // console.log(this.props.tabIndex);
    var tabList = this.props.tabList;
    var tabIndex = this.props.tabIndex;
    // var tabInfo = this.props.tabList[this.props.tabIndex].title;
    var click = this.props.click;
    return (
      <main>
        {tabList.map(function(item, index) {
          return index === tabIndex ? (<header onClick={click.bind(null, tabIndex)}><b>{item.title}</b></header>) : <header onClick={click.bind(null, tabIndex)}>{item.title}</header>;
        })}
      </main>
    );
  }
});

module.exports = Tabhead;
