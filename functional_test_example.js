'use strict'

import * as React from 'react'
import { LoginApp } from 'app'
import { mount } from 'enzyme'

const waitForAsyncTasks = () => new Promise((resolve) => setImmediate(resolve))
const fillIn = (wrapper, input, value) => wrapper.find(input).simulate('change', {target: {value}})
const lastCallToEndpoint = (httpRequest, url) => {
  const calls = httpRequest.args.filter((args) => args[0] === url);
  if (calls.length == 0) {
      throw url + ' was never called!'
  }
  return calls[0][1]
}

describe('LoginApp - Subcutaneous Function Test', () => {
  let httpRequest

  beforeEach(() => {
    httpRequest = sinon.stub()
    jest.setMock('http_request', httpRequest)

    httpRequest.withArgs(ENDPOINTS.LOGIN, sinon.match.string).returns(Promise.resolve(
      {
        json: {
          first_name: 'John',
          last_name: 'Smith',
          email: 'jsmith@example.com'
      }
    }))
  })

  pit('logs user in and displays account information', () => {
    const wrapper = mount(<LoginApp/>)

    wrapper.find('#login').simulate('click')
    fillIn(wrapper, '#username', 'jsmith1')
    fillIn(wrapper, '#password', 'password1')
    wrapper.find('#submit').simulate('click')

    return waitForAsyncTasks().then(() => {
      expect(lastCallToEndpoint(httpRequest, ENDPOINTS.LOGIN).headers.Authorization).to.eql(httpBasic('jsmith1', 'password1'));

      expect(wrapper.text()).to.contain('Name: John Smith');
      expect(wrapper.text()).to.contain('Email: jsmith@example.com');
    })
  })
})
