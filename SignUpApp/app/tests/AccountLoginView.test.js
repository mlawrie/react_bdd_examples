import React from 'react';
import { jsdom } from 'jsdom';

import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../redux_store';
import AccountLoginContainer from '../AccountLoginView'

describe('AccountLoginView', () => {
  global.document = jsdom();
  global.window = global.document.defaultView;
  
  const wrapper = mount(
    <Provider store={store} >
      <AccountLoginContainer />
    </Provider>
  );

  it('When I click the SignUpBtn the SignUpForm is visible', () => {
    wrapper.find('#showFormBtn').simulate('click');
    expect(wrapper.find('form').exists()).to.eql(true);
  });
});