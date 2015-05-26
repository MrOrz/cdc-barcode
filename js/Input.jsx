var React = require('react'),
    mui = require('material-ui'),
    Pin = require('./Pin.jsx'),
    utility = require('./utility'),
    TextField = mui.TextField,
    FlatButton = mui.FlatButton,
    RaisedButton = mui.RaisedButton;

module.exports = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired,
    data: React.PropTypes.object
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      name: this.refs.name.getValue().trim(),
      birthday: this.state.birthday,
      rocid: this.refs.rocid.getValue().trim().toUpperCase(),
      mobile: this.refs.mobile.getValue().trim(),
      email: this.refs.email.getValue().toLowerCase(),
      userId: this.refs.userId.getValue().trim()
    });
  },

  getInitialState() {
    return {
      birthday: this.props.data.birthday
    };
  },

  resetForm() {
    React.findDOMNode(this.refs.form).reset();
  },

  handleBirthdayChange() {
    this.setState({birthday: [
      this.refs.birthYear.getValue(),
      this.refs.birthMonth.getValue(),
      this.refs.birthDay.getValue()
    ]});
  },

  copyBirthdayToUserId() {
    this.refs.userId.setValue(
      utility.getPinFromBirthday(this.state.birthday)
    );
  },

  render() {
    var pinRow = '',
        rowInputStyle = {
          display: 'block', width: 'auto', fontSize: '18px'
        },
        isCopyButtonDisabled = true;

    if(utility.isBirthdayFormatCorrect(this.state.birthday)){
      pinRow = (
        <div>
          您的卡片預設密碼（PIN 碼）為
          <Pin birthday={this.state.birthday} />。
        </div>
      );

      isCopyButtonDisabled = false;
    }

    return (
      <form className="Input" onSubmit={this.handleSubmit} ref="form">
        <header className="Input-header">
          <h1>自然人憑證申請表</h1>
          <button type="reset">清除重填</button>
        </header>
        <TextField floatingLabelText="姓名" type="text" ref="name" defaultValue={this.props.data.name}
                   style={rowInputStyle} required />
        <TextField floatingLabelText="身分證字號" size="10" ref="rocid" defaultValue={this.props.data.rocid}
                   style={rowInputStyle} required />
        <TextField floatingLabelText="E-mail" type="email" ref="email" defaultValue={this.props.data.email}
                   style={rowInputStyle} required />
        <TextField floatingLabelText="行動電話" size="10" ref="mobile" defaultValue={this.props.data.mobile}
                   style={rowInputStyle} required />
        <hr />
        <div className="Input-birthdayRow">
          出生年月日
          民國
          <TextField type="number" ref="birthYear" style={{width: 'auto'}}
                     defaultValue={this.state.birthday[0]} onChange={this.handleBirthdayChange} /> 年
          <TextField type="number" ref="birthMonth" style={{width: 'auto'}}
                     defaultValue={this.state.birthday[1]} onChange={this.handleBirthdayChange} /> 月
          <TextField type="number" ref="birthDay" style={{width: 'auto'}}
                     defaultValue={this.state.birthday[2]} onChange={this.handleBirthdayChange} /> 日
        </div>
        {pinRow}
        <div>
          <TextField floatingLabelText="用戶代碼" type="text" ref="userId"
                     minLength="6" maxLength="10"
                     style={{width: 'auto'}}
                     defaultValue={this.props.data.userId} required />
          <button type="button" onClick={this.copyBirthdayToUserId} disabled={isCopyButtonDisabled}>設成生日</button>
        </div>
        <hr />
        <button type="submit">預覽列印</button>
      </form>
    );
  }
});
