import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: '',
      username: '',
      email: '',
      confemail: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  guestUser(e) {
    e.preventDefault();
    if (this.props.formType === 'login') {
      this.props.processForm({field: 'testuser', password: 'testuser'});
    } else {
      this.props.guestLogin({field: 'testuser', password: 'testuser'});
    }
  }

  renderSignup(){
    return(
      <div>
        <label>
          <br />
          <input onChange={this.update("email")} type="text" value={this.state.email} placeholder='Email'/>
          <br/>
        </label>

        <label>
          <br />
          <input onChange={this.update("confemail")} type="text" value={this.state.confemail} placeholder='Confirm Email'/>
          <br/>
        </label>

        <label>
          <br />
          <input onChange={this.update("username")} type="text" value={this.state.username} placeholder='What should we call you?'/>
          <br />
        </label>
      </div>
      )
  }
  
  

  renderLogin(){
    return(
      <label>
        <br/>
        <input onChange={this.update("field")} type="text" value={this.state.field} placeholder='Email address or username'/>
        <br />
      </label>
    )
  }
render(){
    let formType;
    let welcome;
    let submitText;
    if (this.props.formType === "login"){
      welcome = "To continue, log in to Spotify.";
      formType = this.renderLogin();
      submitText = 'LOG IN';
    } else {
      welcome = "Sign up with your email address";
      formType = this.renderSignup();
      submitText = 'SIGN UP';
    }
              
  
    return(
      <div>
        <div className="guest-cont">
          <button className="guest-btn" onClick={this.guestUser.bind(this)}>SIGN IN WITH GUESTBOOK</button>
        </div>
        <div className="or-out-cont">
          {/* <div className="or-bar">
            <h6>or</h6>
          </div> */}
          <div className='or-cont'>
            <div className='or-line'/>
            <div className='or-text'>or</div>
            <div className='or-line'/>
          </div>
        </div>
        <h3 className="welcome">{welcome}</h3>
        
        
        <div className="errors">{this.renderErrors()}</div>
        <form onSubmit={this.handleSubmit} className='form-box'>

          <div>
            {formType}

            <label>
              <br/>
              <input onChange={this.update("password")} type="password" value={this.state.password} placeholder='Password'/>
              <br/>
              <br/>
            </label>

            {/* <div className="tos">
              <h5>By clicking on Sign up, you agree to Stupify's Terms and Conditions of Use.</h5>
              <br/>
              <h5>To learn more about how Spupify collects, uses, shares and protects your 
              personal data please read Stupify's Privacy Policy.</h5>

            </div> */}
            <div className="button-cont">
              <button className="green-btn">{submitText}</button>
            </div>
          </div>
        </form>
      </div>
    )
  }  
}

export default withRouter(SessionForm);
