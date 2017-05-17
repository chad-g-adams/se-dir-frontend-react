'use strict';

import React from 'react';
import { browserHistory } from 'react-router';

import EnterpriseSummary from './EnterpriseSummaryComponent.js';
import SocialMedia from './SocialMediaComponent.js';
import EnterpriseMap from './EnterpriseMapComponent.js';

class EnterpriseComponent extends React.Component {
  /**
   * Build JSX for fax information
   */
  build_faxes() {
    var enterprise = this.props.enterprise,
      faxes = enterprise.faxes,
      jsx = [];

    faxes.map(function(fax, index) {
      if (fax.public === true) {
        jsx.push(
          <li key={index} className="enterprise-extended__fax">
            {fax.fax}
          </li>
        );
      }
    });

    if (jsx.length > 0) {
      jsx = (
        <div className="enterprise-extended__faxes">
          <h2>Faxes</h2>
          <ul>
            {jsx}
          </ul>
        </div>
      );
    }

    return jsx;
  }

  /**
   * Build JSX for offering
   */
  build_offering() {
    var enterprise = this.props.enterprise,
      offering = enterprise.offering,
      jsx = null;

    if (offering.length > 0) {
      jsx = (
        <div className="enterprise-extended__offering">
          <h2>Offering</h2>
          {offering}
        </div>
      );
    }

    return jsx;
  }

  /**
   * Build JSX for address information
   */
  build_addresses() {
    var enterprise = this.props.enterprise,
      addresses = enterprise.addresses,
      jsx = [];

    addresses.map(function(address, index) {
      if (address.public === true) {
        jsx.push(
          <li key={index} className="enterprise-extended__address">
            {address.address}
          </li>
        );
      }
    });

    if (jsx.length > 0) {
      jsx = (
        <div className="enterprise-extended__addresses">
          <h2>Address</h2>
          <ul>
            {jsx}
          </ul>
        </div>
      );
    }

    return jsx;
  }

  /**
   * Build JSX for phone information
   */
  build_phones() {
    var enterprise = this.props.enterprise,
      phones = enterprise.phones,
      jsx = [];

    // Get all the public phone numbers
    phones.map(function(phone, index) {
      if (phone.public === true) {
        jsx.push(
          <li key={index} className="enterprise-extended__phone-number">
            {phone.number}
          </li>
        );
      }
    });

    // If we got at least one, wrap the <li> in a <ul></ul>
    if (jsx.length > 0) {
      jsx = (
        <div className="enterprise-extended__phones">
          <h2>Phone</h2>
          <ul className="enterprise-extended__phone-numbers">
            {jsx}
          </ul>
        </div>
      );
    }

    return jsx;
  }

  /**
   * Build JSX for email information
   */
  build_emails() {
    var enterprise = this.props.enterprise,
      emails = enterprise.emails,
      jsx = [];

    // Get all the public email addresses
    emails.map(function(email, index) {
      if (email.public === true) {
        jsx.push(
          <li key={index} className="enterprise-extended__email-address">
            {email.email}
          </li>
        );
      }
    });

    // If we got at least one, wrap the <li> in a <ul></ul>
    if (jsx.length > 0) {
      jsx = (
        <div className="enterprise-extended__emails">
          <h2>Email</h2>
          <ul className="enterprise-extended__email-addresses">
            {jsx}
          </ul>
        </div>
      );
    }

    return jsx;
  }

  /**
   * Build JSX for purposes information
   */
  build_purposes() {
    var enterprise = this.props.enterprise,
      purposes = enterprise.purposes,
      jsx = [];

    // Get all the purposes
    purposes.map(function(purpose, index) {
      jsx.push(
        <li key={index} className="enterprise-extended__purpose">
          {purpose}
        </li>
      );
    });

    // If we got at least one, wrap the <li> in a <ul></ul>
    if (jsx.length > 0) {
      jsx = (
        <div className="enterprise-extended__purposes">
          <h2>Purpose</h2>
          <ul className="enterprise-extended__purpose-list">
            {jsx}
          </ul>
        </div>
      );
    }

    return jsx;
  }

  /**
   * Build JSX for year started
   */
  build_year() {
    var year_started = this.props.enterprise.year_started,
      jsx = null;

    if (year_started) {
      jsx = (
        <div className="enterprise-extended__year-started">
          <h2>Year Started</h2>
          <p>
            {year_started}
          </p>
        </div>
      );
    }

    return jsx;
  }

  render() {
    var emails = this.build_emails(),
      phones = this.build_phones(),
      purposes = this.build_purposes(),
      addresses = this.build_addresses(),
      faxes = this.build_faxes(),
      offering = this.build_offering(),
      year_started = this.build_year(),
      enterprise = this.props.enterprise;

    return (
      <div className="enterprise-component">
        <a className="back" onClick={browserHistory.goBack}>Back</a>

        <EnterpriseSummary enterprise={enterprise} linkto='external'>
          <div className="enterprise-extended">
            {purposes}

            {offering}

            {addresses}

            {phones}

            {emails}

            {faxes}

            {year_started}

            <SocialMedia enterprise={enterprise} />

            <EnterpriseMap enterprise={enterprise} />
          </div>
        </EnterpriseSummary>
      </div>
    );
  }
}

EnterpriseComponent.displayName = 'EnterpriseComponent';

export default EnterpriseComponent;
