// Trigger CSS processing
require('normalize.css');
require('../css/index.css');

var React = require('react'),
    Page = require('./Page.jsx'),
    Input = require('./Input.jsx'),
    ThemeManager = require('material-ui/lib/styles/theme-manager')(),
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

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentDidMount() {
    // Disables back button.
    // http://stackoverflow.com/questions/12381563/how-to-stop-browser-back-button-using-javascript
    //
    history.pushState(null, null, '');
    window.addEventListener('popstate', (event) => {
      history.pushState(null, null, '');
      this.backToInput(); // Back to input page whenever back button is pressed.
    });
  },

  render() {
    var content, classModifier;

    if(!this.state.isPreviewing) {
      content = (
        <Input onSubmit={this.setPageData}
               data={this.state.data}/>
      );

      classModifier = 'input';
    } else {
      content = [
        (<button key="nav" className="App-back" onClick={this.backToInput}>返回編輯</button>),
        <Page key="content"
              name={this.state.data.name}
              rocid={this.state.data.rocid}
              email={this.state.data.email}
              mobile={this.state.data.mobile}
              userId={this.state.data.userId}
              birthday={this.state.data.birthday} />
      ];

      classModifier = 'page';
    }

    return (
      <main className={`App--${classModifier}`}>
        {content}
      </main>
    )
  }
});

React.render(<App />, document.getElementById('react-root'));
