import React from 'react';
import { jsdom } from 'jsdom';

import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../redux_store';
import SignUpForm from '../SignUpForm'

describe('AccountLoginView', () => {
  global.document = jsdom();
  global.window = global.document.defaultView;
  
  const wrapper = mount(
    <Provider store={store} >
      <SignUpForm />
    </Provider>
  );

  it('When I click the submitFormBtn I should see an error', () => {
    wrapper.find('#submitFormBtn').simulate('click');
    expect(wrapper.find('form').text()).contains('Missing Name');
  });
});