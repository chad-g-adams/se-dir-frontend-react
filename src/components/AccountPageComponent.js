'use strict';

import React from 'react';
import { Link } from 'react-router';

import Logout from './LogoutComponent.js';


class AccountPageComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      loaded: false,
      directoryAdmin: false,
      authenticatedEnterprises: []
    };
  }

  componentDidMount() {
    this.setState({loaded: false});
    let permissions = this.getPermissions();
    this.parsePermissions(permissions);
  }

  getPermissions() {
    /*
    var component = this,
      url  = this.context.config.api_root + '/account/permissions';

    fetch(url)
      .then(function(response) {
        if (response.ok) {
          return response.json().then(function(json) {
            component.setState({
              enterprise: json
            });
          });
        }
      });
    }

    // TODO: fetch the real permissions here
    let test = {
    "directoryAdmin": false,
    "authenticatedEnterprises": [
      {
      "id": "58014c003762820bc88b8000",
      "name": "13 Muesli"
      },
      {
      "id": "58014c003762820bc88b8004"
      }
      ]
    };

    // IF we get a 403 error, it means we're not logged in.
    // Set logged in to false and redirect to login page

    // Else if we get a successful response, we are logged in
    this.props.setLoggedIn(true);
    return test;
    */
  }

  parsePermissions(permissions) {
    if (!permissions) {
      return;
    }

    if (permissions.directoryAdmin) {
      this.setState({directoryAdmin: true});
    }
    if (permissions.authenticatedEnterprises) {
      this.setState({authenticatedEnterprises: permissions.authenticatedEnterprises});
      this.setState({loaded: true});
    }
  }

  hasNoPermissions() {
    if (!this.state.directoryAdmin && this.state.authenticatedEnterprises.length == 0) {
      return true;
    }
    return false;
  }

  renderAuthenticatedEnterprises() {
    let permissions = [];
    permissions.push(
      this.state.authenticatedEnterprises.map(function(enterprise) {
        return (
          <li className='permission-item' key={enterprise.id}>{enterprise.name || 'ID: ' + enterprise.id}
            <Link className="edit-enterprise" to={'/enterprise/' + enterprise.id}>Edit</Link>
          </li>
        );
      })
    );
    return [
      (<p key="perms">You have permission to edit the following enterprises:</p>),
      (
      <ul className='permissions__list' key="permissions__list">
        {permissions}
      </ul>
      )];
  }

  renderLoading() {
    return (<li key="loading" >Loading...</li>);
  }

  renderNoPermissions() {
    return (<p>You currently have no permissions in the directory</p>);
  }

  renderDirectoryAdmin() {
    return (<p>You have permission to edit the whole directory</p>);
  }

  renderPermissions() {
    if (!this.state.loaded) {
      return this.renderLoading();
    }
    if (this.hasNoPermissions()) {
      return this.renderNoPermissions();
    }
    if (this.state.directoryAdmin) {
      return this.renderDirectoryAdmin();
    }
    return this.renderAuthenticatedEnterprises();
  }

  render() {
    let jsx = this.renderPermissions();

    return (
      <div className="accountpage-component page">
        <h1>Account</h1>
        {jsx}
        <Logout setLoggedIn={this.props.setLoggedIn}/>
      </div>
    );
  }
}

AccountPageComponent.displayName = 'AccountPageComponent';

// Uncomment properties you need
// AccountPageComponent.propTypes = {};
// AccountPageComponent.defaultProps = {};

export default AccountPageComponent;
