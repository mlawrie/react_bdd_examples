'use strict'

const wait = () => new Promise((resolve) => setImmediate(resolve))
import { getState } from 'store/redux_store'
import * as React from 'react'
import { MyCoolApp } from 'app/app'

describe('login flow', () => {
  let httpRequest
  
  beforeEach(() => {
    httpRequest = sinon.stub()
    jest.setMock('network/http_request', httpRequest)

    httpRequest.withArgs(ENDPOINTS.LOGIN, sinon.match.any).returns(Promise.resolve(
      {
        json: {
          first_name: 'John',
          last_name: 'Smith',
          email: 'jsmith@example.com'
      }
    }))
  })

  pit('logs user in and displays account information', () => {
    const app = getInteractiveView(<MyCoolApp/>)

    app.press('login')
    app.fillIn('username', 'jsmith1')
    app.fillIn('password', 'password1')
    app.press('submit')

    return wait().then(() => {
      expect(lastCallToEndpoint(ENDPOINTS.LOGIN).headers.Authorization).to.eql(httpBasic('jsmith1', 'password1'))
      expect(getState().navigation.routes[0].name).to.eql('ACCOUNT_INDEX')

      expect(app.text()).to.contain('Name: John Smith')
      expect(app.text()).to.contain('Email: jsmith@example.com')
    })
  })
})