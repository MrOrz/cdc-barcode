// Trigger CSS processing
require('../css/index.css');

var React = require('react'),
    Page = require('./Page.jsx'),
    App;

App = React.createClass({
  render() {
    return (
      <Page name="王曉明"
            rocid="F123456789"
            email="abc@123.com"
            mobile="0987654321"
            userId="1b2346"
            birthday={[78,12,31]} />
    )
  }
});

React.render(<App />, document.getElementById('react-root'));
