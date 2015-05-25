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

  setPageData(data) {
    this.setState({
      isPreviewing: true,
      data: data
    });
  },

  backToInput() {
    this.setState({
      isPreviewing: false
    });
  },

  render() {
    var content;

    if(!this.state.isPreviewing) {
      content = (
        <Input onSubmit={this.setPageData}
               data={this.state.data}/>
      );
    } else {
      content = [
        (<button key="nav" onClick={this.backToInput}>返回編輯</button>),
        <Page key="content"
              name={this.state.data.name}
              rocid={this.state.data.rocid}
              email={this.state.data.email}
              mobile={this.state.data.mobile}
              userId={this.state.data.userId}
              birthday={this.state.data.birthday} />
      ];
    }

    return (
      <main>
        {content}
      </main>
    )
  }
});

React.render(<App />, document.getElementById('react-root'));
