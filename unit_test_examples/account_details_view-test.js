'use strict'

import * as React from 'react';
import { shallow } from 'enzyme';
import { dispatch } from 'redux_store';
import { setUserInfoAction } from 'actions';
import { AccountDetailsView } from 'accountDetailsView';

describe('AccountDetailsView - Traditional Unit Test', () => {
  it("shows the user's name and email", () => {
    const instance = shallow(<AccountDetailsView/>).instance();
    instance.setState({firstName: 'John', lastName: 'Smith', email: "jsmith@example.com"});
    expect(wrapper.text()).to.contain('Name: John Smith');
    expect(wrapper.text()).to.contain('Email: jsmith@example.com');
  });
});

describe('AccountDetailsView - Behavioral Component Test', () => {
  it("shows the user's name and email", () => {
    dispatch(setUserInfoAction({firstName: "John", lastName: "Smith", email: "jsmith@example.com"}));
    const wrapper = shallow(<AccountDetailsView/>);
    expect(wrapper.text()).to.contain('Name: John Smith');
    expect(wrapper.text()).to.contain('Email: jsmith@example.com');
  });
});
