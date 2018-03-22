import React from 'react'
import renderer from 'react-test-renderer'
import { PasswordInput } from 'kitten/components/form/password-input'

describe('<PasswordInput />', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer
      .create(
        <PasswordInput
          textInputProps={{}}
          iconLabel="show"
          hiddenIconLabel="hidden"
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
