var React = require('react'),
    ioBarcode = require("io-barcode");

module.exports = React.createClass({
  propTypes: {
    code: React.PropTypes.string.isRequired
  },
  componentDidMount() {
    var placeholder = React.findDOMNode(this.refs.placeholder);
    try {
      var canvas = ioBarcode.CODE128B(
        this.props.code,
        {
          displayValue: true,
          height: 50,
          fontSize: 18
        }
      );
      placeholder.appendChild(canvas);
    } catch (e) {
      console.error(e);
      placeholder.innerText = "您輸入的字無法編成條碼";
    }

  },
  render() {
    return (
      <div ref="placeholder" />
    )
  }
});