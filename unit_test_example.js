'use strict'

import { dispatch } from 'redux_store'
import { TestUtils } from 'react/addons'
import { userLoginAction } from 'actions'
import * as React from 'react'
import { AccountIndex } from 'account_index'
import { shallow } from 'enzyme'

describe('AccountIndex: bad example', () => {
  it("shows the user's name and email", () => {
    const wrapper = shallow(<AccountIndex email="jsmith@example.com" firstName="John" lastName="Smith"/>)
    expect(wrapper.text()).to.contain('Name: John Smith')
    expect(wrapper.text()).to.contain('Email: jsmith@example.com')
  })

  it('shows the details section when pressed', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<AccountIndex email="jsmith@example.com" firstName="John" lastName="Smith"/>)
    const instance = tree.getMountedInstance();
    expect(instance.getState().detailsSectionVisible).is.not.ok
    instance.onDetailsPressed()
    expect(instance.getState().detailsSectionVisible).is.ok
  })
})

describe('AccountIndex: good example', () => {
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

