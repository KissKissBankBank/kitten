import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonImage } from '../../../components/buttons/button-image'

describe('<ButtonImage />', () => {
  it('should match with snapshot', () => {
    const tree = renderer
      .create(
        <ButtonImage
          img={{
            src: '#image_url',
          }}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should match with propped snapshot', () => {
    const tree = renderer
      .create(
        <ButtonImage
          tag={'button'}
          tiny={true}
          withoutPointerEvents={true}
          withBorder={true}
          img={{
            src: '#image_url',
          }}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
