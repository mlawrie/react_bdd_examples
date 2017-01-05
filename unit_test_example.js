'use strict'

import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { dispatch } from 'redux_store';
import { userLoginAction } from 'actions';
import { AccountLoginView } from 'accountLoginView';
import { AccountDetailsView } from 'accountDetailsView';
import { AccountLoginService } from 'accountLoginService';

//View Function + Action Creator + Reducer

describe('AccountLoginView - Traditional Unit Test', () => {
  it('shows the login form section when pressed', () => {
    const wrapper = mount(<AccountLoginView/>)
    const instance = wrapper.instance();
    expect(instance.getState().loginFormVisible).to.eq(false)
    instance.onLoginButton()
    expect(instance.getState().loginFormVisible).to.eq(true)
  });

  it('adds error messages for submitting an empty form', () => {
    const wrapper = mount(<AccountLoginView/>)
    const instance = wrapper.instance();
    instance.onLoginButton();
    instance.onSubmit();
    expect(instance.getState().errors).to.contain("Username required");
    expect(instance.getState().errors).to.contain("Password required");
  });

  it("calls AccountLoginService with user's credentials", () => {
    const accountLoginServiceStub = sinon.stub();
    jest.setMock('accountLoginService', accountLoginServiceStub);

    const wrapper = mount(<AccountLoginView/>)
    const instance = wrapper.instance();
    instance.onLoginButton();
    instance.setState({username: 'jsmith', password: 'password'})
    instance.onSubmit();
    expect(accountLoginServiceStub).to.be.calledWith('jsmith:password');
  });
});

describe('AccountDetailsView - Traditional Unit Test', () => {
  it("shows the user's name and email", () => {
    const wrapper = mount(<AccountDetailsView/>)
    const instance = wrapper.instance();
    instance.setState({firstName: 'John', lastName: 'Smith', email: "jsmith@example.com"});
    expect(wrapper.text()).to.contain('Name: John Smith')
    expect(wrapper.text()).to.contain('Email: jsmith@example.com')
  });
});

describe('AccountLoginView - Behavioral Component Test', () => {
  const setupWrapper = () => {
    dispatch(userLoginAction({firstName: "John", lastName: "Smith", email: "jsmith@example.com"}))
    return shallow(<AccountLoginView/>)
  }

  it("shows the user's name and email", () => {
    const wrapper = setupWrapper()
    expect(wrapper.text()).to.contain('Name: John Smith')
    expect(wrapper.text()).to.contain('Email: jsmith@example.com')
  })

  it('shows the details section when pressed', () => {
    const wrapper = setupWrapper()
    expect(wrapper.text()).to.not.contain('Account details')
    wrapper.find('submit').simulate('click')
    expect(wrapper.text()).to.contain('Account details')
  })
})

describe('AccountDetailsView - Behavioral Component Test', () => {
  const setupWrapper = () => {
    dispatch(userLoginAction({firstName: "John", lastName: "Smith", email: "jsmith@example.com"}))
    return shallow(<AccountDetailsView/>)
  }

  it("shows the user's name and email", () => {
    const wrapper = setupWrapper()
    expect(wrapper.text()).to.contain('Name: John Smith')
    expect(wrapper.text()).to.contain('Email: jsmith@example.com')
  })

  it('shows the details section when pressed', () => {
    const wrapper = setupWrapper()
    expect(wrapper.text()).to.not.contain('Account details')
    wrapper.find('submit').simulate('click')
    expect(wrapper.text()).to.contain('Account details')
  })
})
