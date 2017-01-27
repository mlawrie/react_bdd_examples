'use strict'

import * as React from 'react';
import { shallow } from 'enzyme';
import { dispatch } from 'redux_store';
import { setLoginInfoAction, setUserInfoAction, showLoginFormAction } from 'actions';
import { AccountLoginView } from 'accountLoginView';
import { AccountLoginService } from 'accountLoginService';

describe('AccountLoginView - Traditional Unit Test', () => {
  it('shows the login form section when pressed', () => {
    const instance = shallow(<AccountDetailsView/>).instance();
    expect(instance.getState().loginFormVisible).to.eq(false);
    instance.onLoginButton();
    expect(instance.getState().loginFormVisible).to.eq(true);
  });

  it('adds error messages for submitting an empty form', () => {
    const instance = shallow(<AccountDetailsView/>).instance();
    instance.onLoginButton();
    instance.onSubmit();
    expect(instance.getState().errors).to.contain("Username required");
    expect(instance.getState().errors).to.contain("Password required");
  });

  it("calls AccountLoginService with user's credentials", () => {
    const accountLoginServiceStub = sinon.stub();
    jest.setMock('accountLoginService', accountLoginServiceStub);
    const instance = shallow(<AccountDetailsView/>).instance();
    instance.onLoginButton();
    instance.setState({username: 'jsmith', password: 'password'});
    instance.onSubmit();
    expect(accountLoginServiceStub).to.be.calledWith('jsmith:password');
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

  it("calls AccountLoginService with user's credentials", () => {
    const wrapper = shallow(<AccountDetailsView/>);
    dispatch(showLoginFormAction({loginFormVisible:true}));
    dispatch(setLoginInfoAction({username: 'jsmith', password: 'password'}));

    wrapper.find('#submit').simulate('click');

    expect(accountLoginServiceStub).to.be.calledWith('jsmith:password');
  });
});
