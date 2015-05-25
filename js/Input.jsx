var React = require('react');

module.exports = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired,
    data: React.PropTypes.object
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      name: React.findDOMNode(this.refs.name).value.trim(),
      birthday: [
        React.findDOMNode(this.refs.birthYear).value,
        React.findDOMNode(this.refs.birthMonth).value,
        React.findDOMNode(this.refs.birthDay).value,
      ],
      rocid: React.findDOMNode(this.refs.rocid).value.trim().toUpperCase(),
      mobile: React.findDOMNode(this.refs.mobile).value.trim(),
      email: React.findDOMNode(this.refs.email).value.toLowerCase(),
      userId: React.findDOMNode(this.refs.userId).value.trim()
    });
  },

  render() {
    var name = (
      <label key="name">
        姓名
        <input type="text" ref="name" defaultValue={this.props.data.name} />
      </label>
    ), birthday = (
      <label key="birth">
        出生年月日
        民國 <input type="number" ref="birthYear" defaultValue={this.props.data.birthday[0]} /> 年
        <input type="number" ref="birthMonth" defaultValue={this.props.data.birthday[1]} /> 月
        <input type="number" ref="birthDay" defaultValue={this.props.data.birthday[2]} /> 日
      </label>
    ), rocId = (
      <label key="roc">
        身分證字號
        <input type="text" ref="rocid" defaultValue={this.props.data.rocid} />
      </label>
    ), mobile = (
      <label key="mobile">
        手機號碼
        <input type="text" ref="mobile" defaultValue={this.props.data.mobile} />
      </label>
    ), email = (
      <label key="email">
        E-mail
        <input type="text" ref="email" defaultValue={this.props.data.email} />
      </label>
    ), userId = (
      <label key="id">
        用戶代碼
        <input type="text" ref="userId" defaultValue={this.props.data.userId} />
      </label>
    );

    return (
      <form className="Input" onSubmit={this.handleSubmit}>
        {name}
        {birthday}
        {rocId}
        <hr />
        {mobile}
        {email}
        {userId}
        <hr />
        <button type="submit">預覽列印</button>
      </form>
    );
  }
});
