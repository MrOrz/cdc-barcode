// Trigger CSS processing
require('../css/index.css');

var React = require('react'),
    BarCode = require('./BarCode.jsx'),

    App;

App = React.createClass({
  render() {
    return (
      <BarCode code="ABCabc123@" />
    )
  }
});

React.render(<App />, document.getElementById('react-root'));
