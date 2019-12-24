import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonImageWithText } from './index'

describe('<ButtonImageWithText />', () => {
  it('should match with snapshot', () => {
    const tree = renderer
      .create(
        <ButtonImageWithText
          title="Custom title"
          description="Custom description"
          micro={false}
          largeGutter={false}
          titleRegular={false}
          textRegular={false}
          avatarProps={{
            src: 'https://placehold.it/100x100/caf4fe/caf4fe',
          }}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
