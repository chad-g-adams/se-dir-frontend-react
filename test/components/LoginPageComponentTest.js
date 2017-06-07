/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';


import React from 'react';
import { mount } from 'enzyme';

import LoginPageComponent from 'components/LoginPageComponent.js';

describe('LoginPageComponent', () => {
  let component;

  beforeEach(() => {

    let componentOptions = {
      context: {
        config: {
          api_root: ''
        }
      },
      childContextTypes: {
        'config': React.PropTypes.object
      }
    };

    component = mount(
      <LoginPageComponent/>,
      componentOptions
    );

  });

  it('should have its component name as default className', () => {
    expect(component.hasClass('loginpage-component')).to.equal(true);
  });
});
