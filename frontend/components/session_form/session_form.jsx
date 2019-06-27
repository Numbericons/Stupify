import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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
      <ul className='login-errors'>
        {this.props.errors.map((error, i) => (
          <li className='li-error' key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  guestUser(e) {
    e.preventDefault();
    if (this.props.formType === 'login') {
      this.props.processForm({field: 'demo', password: '123456'});
    } else {
      this.props.guestLogin({field: 'demo', password: '123456'});
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

  renderSignUpInstead(){
    if (this.props.formType === "login") {
      return(
      <div>
        <div className='or-cont'>
            <div className='or-line-extd'/>
        </div>
        <h2>Don't have an account?</h2>
        <div className="signup-btn-cont">
          <Link to="/signup">
            <button className="signup-btn">SIGN UP FOR STUPIFY</button>
          </Link>
        </div>
      </div>
      ) 
    } else {
      return (<nav/>)
    }
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
        <header>
          <div className='stupify-head'>
            <img className='logo' src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fsimple-icons%2F512%2Fspotify-512-black.png&f=1"/>
            <h1 className='stupify-head-text'>Stupify</h1>
          </div>
        </header>
        <div className="guest-cont">
          <button className="guest-btn" onClick={this.guestUser.bind(this)}>SIGN IN WITH GUESTBOOK</button>
        </div>
        <div className="or-out-cont">
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

            <div className="button-cont">
              <button className="green-btn">{submitText}</button>
            </div>
            {this.renderSignUpInstead()}
          </div>
        </form>
      </div>
    )
  }  
}

export default withRouter(SessionForm);
