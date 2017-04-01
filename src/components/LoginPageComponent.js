'use strict';

import React from 'react';

import { browserHistory } from 'react-router';

class LoginPageComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      loginMethod: 'facebook'
    };
  }

  handleLoginMethodChange(e) {
    this.setState({loginMethod: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.loginMethod === 'twitter') {
      window.location.href = 'http://localhost:10010/api/v1/account/login/twitter';
    } else if (this.state.loginMethod === 'facebook') {
      window.location.href = 'http://localhost:10010/api/v1/account/login/facebook';
    }
  }

  render() {
    return (
      <div className="loginpage-component page">
          <a className="back" onClick={browserHistory.goBack}>Back</a>

          <h1>Login</h1>
          <p>Choose one of the services below to login:</p>
          <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
            <select className="login-method" name="loginMethod" defaultValue="facebook" onChange={this.handleLoginMethodChange.bind(this)}>
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
            </select>
            <input className="button button--login" type="submit" value="Login" />
          </form>
      </div>
    );
  }
}


LoginPageComponent.displayName = 'LoginPageComponent';

// Uncomment properties you need
// LoginPageComponentComponent.propTypes = {};
// LoginPageComponentComponent.defaultProps = {};

export default LoginPageComponent;
