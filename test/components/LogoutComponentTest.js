/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import LogoutComponent from 'components/LogoutComponent.js';

describe('LogoutComponent', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LogoutComponent />);
  });

  it('should have its component name as default className', () => {
    expect(component.hasClass('logout-component')).to.equal(true);
  });
});
