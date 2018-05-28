import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonImageWithText } from 'kitten/components/buttons/button-image-with-text'

describe('<ButtonImageWithText />', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer
      .create(
        <ButtonImageWithText
          title="Custom title"
          description="Custom description"
          tag="Custom tag"
          micro={false}
          largeGutter={false}
          regularTitle={false}
          regularText={false}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
