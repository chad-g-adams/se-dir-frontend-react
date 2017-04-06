'use strict';

import React from 'react';
import {browserHistory} from 'react-router';

class LogoutComponent extends React.Component {

  handleLogout(e) {
    e.preventDefault();

    //TODO: call backend logout/ endpoint here.

    this.props.setLoggedIn(false);
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="logout-component">
        <button type="button" className="button button--logout" onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}

LogoutComponent.displayName = 'LogoutComponent';

// Uncomment properties you need
// LogoutComponent.propTypes = {};
// LogoutComponent.defaultProps = {};

export default LogoutComponent;
