'use strict';

import React from 'react';
import { Link } from 'react-router';

class SiteNavigationComponent extends React.Component {
  buildItems() {
    //TODO use real logged in value
    let loggedIn = false;
    let jsx = [];
    if (loggedIn) {
      jsx.push(
        <li className="nav__item">
          <Link className="nav__link" to="/account">Account</Link>
        </li>
      );
    }
    return jsx;
  }

  render() {
    let additionalItems = this.buildItems();
    return (
      <header className="header sitenavigation-component">
        <nav className="nav nav--top">
          <ul className="nav__items">
            <li className="nav__item">
              <Link className="nav__link" to="/">Home</Link>
            </li>
          {additionalItems}
          </ul>
        </nav>
      </header>
    );
  }
}

SiteNavigationComponent.displayName = 'SiteNavigationComponent';

// Uncomment properties you need
// SiteNavigationComponent.propTypes = {};
// SiteNavigationComponent.defaultProps = {};

export default SiteNavigationComponent;
