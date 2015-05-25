var React = require('react');

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    rocid: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    mobile: React.PropTypes.string.isRequired,
    userId: React.PropTypes.string.isRequired,
    birthday: React.PropTypes.array
  },

  render() {
    return (
      <div className="Page">
        <h2>Page!</h2>
      </div>
    );
  }
});

