var React = require('react'),
    ioBarcode = require("io-barcode");

module.exports = React.createClass({
  propTypes: {
    code: React.PropTypes.string.isRequired
  },
  componentDidMount() {
    var canvas = ioBarcode.CODE128B(
      this.props.code,
      {
        displayValue: true
      }
    );

    React.findDOMNode(this.refs.placeholder).appendChild(canvas);
  },
  render() {
    return (
      <div ref="placeholder" />
    )
  }
});