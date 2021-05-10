import React from 'react'
import { ImageCropper } from './index'
import renderer from 'react-test-renderer'

describe('<ImageCropper />', () => {
  it('matches with snapshot', () => {
    const component = renderer.create(<ImageCropper name="cropper" />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
