import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonImageWithText } from 'kitten/components/buttons/button-image-with-text'

describe('<ButtonImageWithText />', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer.create(<ButtonImageWithText />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
