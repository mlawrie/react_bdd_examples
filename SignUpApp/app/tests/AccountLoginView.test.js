import React from 'react';
import { jsdom } from 'jsdom';

import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../redux_store';
import AccountLoginView from '../AccountLoginView'

describe('AccountLoginView', () => {
  global.document = jsdom();
  global.window = global.document.defaultView;
  
  const wrapper = mount(
    <Provider store={store} >
      <AccountLoginView />
    </Provider>
  );

  it('When I click the SignUpBtn the SignUpForm is visible', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('form').exists()).to.eql(true);
  })
});