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
  
  const SignUpFormWrapper = mount(
    <Provider store={store} >
      <SignUpForm />
    </Provider>
  );

  it('When I click the submitFormBtn I should see an errors', () => {
    SignUpFormWrapper.find('#submitFormBtn').simulate('click');
    expect(SignUpFormWrapper.find('form').text()).contains('Missing Name');
    expect(SignUpFormWrapper.find('form').text()).contains('Missing Email');
    expect(SignUpFormWrapper.find('form').text()).contains('Missing Password');
    expect(SignUpFormWrapper.find('form').text()).contains('Missing Password Confirmation');
  });

  it('should not contain errors with valid values', () => {
    SignUpFormWrapper.find('#name').simulate('change', { target : { value: 'name' } })
    SignUpFormWrapper.find('#email').simulate('change', { target : { value: 'email' } })
    SignUpFormWrapper.find('#password').simulate('change', { target : { value: 'password' } })
    SignUpFormWrapper.find('#passwordConfirmation').simulate('change', { target : { value: 'passwordConfirmation' } })
    SignUpFormWrapper.find('#submitFormBtn').simulate('click');
    expect(SignUpFormWrapper.find('form').text()).eql(' Submit ');
  });
});