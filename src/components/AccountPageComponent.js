'use strict';

import React from 'react';


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
    return test;
  }

  parsePermissions(permissions) {
    if (!permissions) {
      return;
    }

    if (permissions.directoryAdmin) {
      this.setState({directoryAdmin: true});
    }
    if (permissions.authenticatedEnterprises) {
      let list = permissions.authenticatedEnterprises.map((e) => {
        if (e.name) return e.name;
        return 'ID: ' + e.id;
      });
      this.setState({authenticatedEnterprises: list});
      this.setState({loaded: true});
    }
  }

  hasNoPermissions() {
    if (!this.state.directoryAdmin && this.state.authenticatedEnterprises.length == 0) {
      return true;
    }
    return false;
  }

  render() {
    let jsx = [];
    let permissions = [];

    if (!this.state.loaded) {
      jsx.push(<li key="loading" >Loading...</li>);
    } else {
      if (this.hasNoPermissions()) {
        jsx.push(<p>You currently have no permissions in the directory</p>);
      }
      else {
        if (this.state.directoryAdmin) {
          jsx.push(<p>You have permission to edit the whole directory</p>);
        } else {
          jsx.push(<p>You have permission to edit the following enterprises:</p>);
          permissions.push(
            this.state.authenticatedEnterprises.map(function(name) {
              return (
                <li className='permission-item' key={name}>{name} <a href='/'>Edit</a></li>
              );
            })
          );
        }
      }
    }

    return (
      <div className="accountpage-component page">
        <h1>Account</h1>
        {jsx}
        <ul className='permissions__list'>
          {permissions}
        </ul>
      </div>
    );
  }
}

AccountPageComponent.displayName = 'AccountPageComponent';

// Uncomment properties you need
// AccountPageComponent.propTypes = {};
// AccountPageComponent.defaultProps = {};

export default AccountPageComponent;
