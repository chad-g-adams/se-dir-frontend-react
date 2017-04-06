'use strict';

import React from 'react';
import { Link } from 'react-router';

class SiteNavigationComponent extends React.Component {
  buildItems() {
    let loggedIn = this.props.isLoggedIn;
    let jsx = [];
    if (loggedIn) {
      jsx.push(
        <li className="nav__item" key="Account">
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
            <li className="nav__item" key="Home">
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
