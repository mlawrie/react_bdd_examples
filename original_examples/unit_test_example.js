'use strict'

import * as React from 'react';
import { shallow } from 'enzyme';
import { dispatch } from 'redux_store';
import { showLoginFormAction } from 'actions';
import { AccountLoginView } from 'accountLoginView';

describe('AccountLoginView - Naive Unit Test', () => {
  it('shows the login form section when pressed', () => {
    const instance = shallow(<AccountLoginView/>).instance();
    expect(instance.getState().loginFormVisible).to.eq(false);
    instance.onLoginButton();
    expect(instance.getState().loginFormVisible).to.eq(true);
  });

  it('adds error messages for submitting an empty form', () => {
    const instance = shallow(<AccountLoginView/>).instance();
    instance.onLoginButton();
    instance.onSubmit();
    expect(instance.getState().errors).to.contain("Username required");
    expect(instance.getState().errors).to.contain("Password required");
  });
});

describe('AccountLoginView - Behavioral Component Test', () => {
  it('adds error messages for submitting an empty form', () => {
    const wrapper = shallow(<AccountDetailsView/>);
    dispatch(showLoginFormAction({loginFormVisible:true}))

    wrapper.find('#submit').simulate('click');

    expect(instance.text()).to.contain("Username required");
    expect(instance.text()).to.contain("Password required");
  });
});
