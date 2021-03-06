/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import { SocialMediaComponent } from 'components/SocialMediaComponent.js';

describe('SocialMediaComponent', () => {
  let component;

  var enterpriseProp = {
    'facebook': 'facebook_userame',
    'twitter': 'twitter_userame',
    'instagram': 'instagram_userame'
  };

  beforeEach(() => {
    component = shallow(
      <SocialMediaComponent enterprise={enterpriseProp} t={key => key} />
    );
  });

  it('should have its component name as default className', () => {
    expect(component.hasClass('socialmedia-component')).to.equal(true);
  });
});
