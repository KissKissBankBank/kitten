import React from 'react'
import renderer from 'react-test-renderer'
import { PasswordInput } from './index'

describe('<PasswordInput />', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer
      .create(
        <PasswordInput
          iconLabel="Custom icon label"
          hiddenIconLabel="Custom hidden icon label"
          id="password"
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
