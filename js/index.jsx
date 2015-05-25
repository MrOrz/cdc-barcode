// Trigger CSS processing
require('../css/index.css');

var React = require('react'),
    Page = require('./Page.jsx'),
    Input = require('./Input.jsx'),
    App;

App = React.createClass({
  getInitialState() {
    return {
      isPreviewing: false,
      data: {
        name: '',
        birthday: [],
        rocid: '',
        mobile: '',
        email: '',
        userId: ''
      }
    };
  },

  onInputSubmit(data) {
    this.setState({
      isPreviewing: true,
      data: data
    });
  },

  render() {
    if(!this.state.isPreviewing) {
      return (
        <Input onSubmit={this.onInputSubmit}
             data={this.state.data}/>
     );
    } else {
      return (
        <Page name={this.state.data.name}
              rocid={this.state.data.rocid}
              email={this.state.data.email}
              mobile={this.state.data.mobile}
              userId={this.state.data.userId}
              birthday={this.state.data.birthday} />
      );
    }
  }
});

React.render(<App />, document.getElementById('react-root'));
