import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { Uploader } from 'kitten/components/uploaders/uploader'
import Dropzone from 'react-dropzone'

const CustomTheme = () => <div className="custom-theme" />

describe('<Uploader />', () => {
  describe('by default', () => {
    const component = mount(<Uploader />)

    it('has default props', () => {
      expect(component).to.have.props({
        name: null,
        acceptedFiles: 'image/*',
        maxSize: null,
        fileName: null,
        theme: null,
        buttonLabel: 'Choose a file',
      })
    })

    it('has a default state', () => {
      expect(component).to.have.state('fileName', null)
    })

    it('has a <Dropzone /> with default props', () => {
      const dropzone = component.find(Dropzone).first()

      expect(dropzone).to.have.length(1)
      expect(dropzone).to.have.props({
        accept: 'image/*',
        maxSize: null,
        disableClick: true,
        multiple: false,
      })
    })
  })

  describe('with theme prop', () => {
    const component = mount(
      <Uploader
        theme={ CustomTheme }
        buttonLabel="Custom label"
        fileName="custom-filename.jpg"
      />
    )

    it('renders a custom theme', () => {
      expect(component).to.have.descendants('.custom-theme')
    })
  })
})
