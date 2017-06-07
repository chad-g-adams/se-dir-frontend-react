/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import AccountPageComponent from 'components/AccountPageComponent.js';

describe('AccountPageComponent', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AccountPageComponent />);
  });

  it('should have its component name as default className', () => {
    expect(component.hasClass('accountpage-component')).to.equal(true);
  });
});