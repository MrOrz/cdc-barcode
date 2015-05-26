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
        inputStyle = {
          width: 'auto', fontSize: '18px'
        },
        isCopyButtonDisabled = true;

    if(utility.isBirthdayFormatCorrect(this.state.birthday)){
      pinRow = (
        <div className="Input-pinRow">
          使用自然人憑證時，會出現「請輸入 PIN 碼」。<br />
          <em>
            您的卡片密碼（PIN 碼）為
            <Pin className="Input-pin" birthday={this.state.birthday} />
          </em>
          。拿到自然人憑證卡片之後，方可自行上網變更。
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
        <section>
          <div className="Input-row Input-row--guttered">
            <TextField floatingLabelText="姓名" type="text" ref="name" defaultValue={this.props.data.name}
                       className="Input-rowItem" style={inputStyle} required />
            <TextField floatingLabelText="身分證字號" size="10" ref="rocid" defaultValue={this.props.data.rocid}
                       className="Input-rowItem" style={inputStyle} required />
          </div>
          <div className="Input-birthday Input-row">
            出生年月日
            民國
            <TextField className="Input-rowItem Input-birthdayItem" type="number" ref="birthYear"
                       style={inputStyle}
                       defaultValue={this.state.birthday[0]} onChange={this.handleBirthdayChange} /> 年
            <TextField className="Input-rowItem Input-birthdayItem" type="number" ref="birthMonth"
                       style={inputStyle}
                       defaultValue={this.state.birthday[1]} onChange={this.handleBirthdayChange} /> 月
            <TextField className="Input-rowItem Input-birthdayItem" type="number" ref="birthDay"
                       style={inputStyle}
                       defaultValue={this.state.birthday[2]} onChange={this.handleBirthdayChange} /> 日
          </div>
        </section>

        <section>
          <div className="Input-row Input-row--guttered">
            <TextField floatingLabelText="E-mail" type="email" ref="email" defaultValue={this.props.data.email}
                       className="Input-rowItem" style={inputStyle} required />
            <TextField floatingLabelText="行動電話" size="10" ref="mobile" defaultValue={this.props.data.mobile}
                       className="Input-rowItem" style={inputStyle} required />
          </div>
        </section>

        <section>
          {pinRow}
          <div className="Input-row Input-userIdRow">
            <div className="Input-rowItem Input-userId">
              <TextField style={{width: '100%', fontSize: '18px'}}
                         floatingLabelText="用戶代碼" type="text" ref="userId"
                         hintText="6 ~ 10 碼英文、數字或「@」、「%」等特殊符號"
                         minLength="6" maxLength="10"
                         defaultValue={this.props.data.userId} required />
              <p className="Input-userIdNote">鎖卡之後，才會用「用戶代碼」解鎖。</p>
            </div>

            <button type="button" onClick={this.copyBirthdayToUserId} disabled={isCopyButtonDisabled}>設成生日</button>
          </div>
        </section>

        <button type="submit">預覽列印</button>
      </form>
    );
  }
});
