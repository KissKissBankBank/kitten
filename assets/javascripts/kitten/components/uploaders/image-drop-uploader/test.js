import React from 'react'
import renderer from 'react-test-renderer'
import { ImageDropUploader } from './index'

describe('<ImageDropUploader />', () => {
  it('should match snapshot', () => {
    const component = renderer
      .create(<ImageDropUploader id="ImageDropUploader" />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot with props', () => {
    const component = renderer
      .create(
        <ImageDropUploader
          id="ImageDropUploader"
          buttonProps={{ 'aria-label': 'Hello World!' }}
          buttonTitle="Title"
          buttonText="Subtitle"
          managerTitle="Title"
          managerText="Subtitle"
          canCancel={true}
          cancelButtonText="Cancel"
          fileInputProps={{ 'aria-label': 'Hello World!' }}
          initialValue="/hello.jpg"
          cropRatio={16/9}
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot with error', () => {
    const component = renderer
      .create(
        <ImageDropUploader
          id="ImageDropUploader"
          buttonProps={{ 'aria-label': 'Hello World!' }}
          buttonTitle="Title"
          buttonText="Subtitle"
          managerTitle="Title"
          managerText="Subtitle"
          canCancel={true}
          cancelButtonText="Cancel"
          fileInputProps={{ 'aria-label': 'Hello World!' }}
          initialValue="/hello.jpg"
          error={true}
          errorMessage="Error"
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot with props', () => {
    const component = renderer
      .create(
        <ImageDropUploader
          id="ImageDropUploader"
          buttonProps={{ 'aria-label': 'Hello World!' }}
          buttonTitle="Title"
          buttonText="Subtitle"
          managerTitle="Title"
          managerText="Subtitle"
          canCancel={true}
          cancelButtonText="Cancel"
          disabled={true}
          fileInputProps={{ 'aria-label': 'Hello World!' }}
          initialValue="/hello.jpg"
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
