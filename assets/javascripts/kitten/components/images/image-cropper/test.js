import React from 'react'
import { ImageCropper } from '../../../components/images/image-cropper'
import renderer from 'react-test-renderer'

describe('<ImageCropper />', () => {
  it('matches with empty snapshot', () => {
    const component = renderer.create(<ImageCropper name="cropper" />).toJSON()
    expect(component).toMatchSnapshot()
  })
  it('matches with snapshot with imageSrc', () => {
    const component = renderer
      .create(
        <ImageCropper
          name="cropper"
          imageSrc="/kitten.jpg"
          fileName="Steven Kitten"
          buttonProps={{ variant: 'orion' }}
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
