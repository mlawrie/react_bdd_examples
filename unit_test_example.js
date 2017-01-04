'use strict'

import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { dispatch } from 'redux_store';
import { userLoginAction } from 'actions';
import { AccountLoginView } from 'accountLoginView';
import { AccountDetailsView } from 'accountDetailsView';

// Traditional Unit test
describe('Traditional Unit Test', () => {
  describe('AccountDetailsView', () => {
    it("shows the user's name and email", () => {
      const wrapper = shallow(<AccountDetailsView email="jsmith@example.com" firstName="John" lastName="Smith"/>);
      expect(wrapper.text()).to.contain('Name: John Smith');
      expect(wrapper.text()).to.contain('Email: jsmith@example.com');
    });
  });

  describe('AccountLoginView', () => {
    it('shows the details section when pressed', () => {
      const wrapper = mount(<AccountLoginView email="jsmith@example.com" firstName="John" lastName="Smith"/>)
      const instance = wrapper.instance();
      expect(instance.getState()).is.not.ok
      instance.onDetailsPressed()
      expect(instance.getState().detailsSectionVisible).is.ok
    });
  })l;
});

describe('Behavioral Component Test', () => {
  const setupWrapper = () => {
    dispatch(userLoginAction({firstName: "John", lastName: "Smith", email: "jsmith@example.com"}))
    return shallow(<AccountIndex/>)
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
