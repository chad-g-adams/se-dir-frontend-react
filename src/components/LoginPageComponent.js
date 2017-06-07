'use strict';

import React from 'react';

import { browserHistory } from 'react-router';

class LoginPageComponent extends React.Component {

  constructor() {
    super();
  }


  render() {
    let api_root = this.context.config.api_root;
    return (
      <div className="loginpage-component page">
          <a className="back" onClick={browserHistory.goBack}>Back</a>

          <h1>Login</h1>
          <p>Choose one of the services below to login:</p>

          <table className="login-table">
            <tr className="login-icons-row">
              <td className="login-icons-cell">
                <a role="button" className="button button--login" href={api_root + '/account/login/facebook'}>
                  <img className="login__icon" src="/images/facebook.png" alt="" />
                </a>
              </td>
              <td className="login-icons-cell">
                <a role="button" className="button button--login" href={api_root + '/account/login/twitter'}>
                  <img className="login__icon" src="/images/twitter.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <td><a href={api_root + '/account/login/facebook'}>Facebook</a></td>
              <td><a href={api_root + '/account/login/twitter'}>Twitter</a></td>
            </tr>
          </table>
      </div>
    );
  }
}


LoginPageComponent.displayName = 'LoginPageComponent';

LoginPageComponent.contextTypes = {
  'config': React.PropTypes.object,
  'logger': React.PropTypes.object
};
// Uncomment properties you need
// LoginPageComponentComponent.propTypes = {};
// LoginPageComponentComponent.defaultProps = {};

export default LoginPageComponent;
