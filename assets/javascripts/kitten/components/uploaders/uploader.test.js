import React from 'react'
import { mount } from 'enzyme'
import { Uploader } from 'kitten/components/uploaders/uploader'
import Dropzone from 'react-dropzone'

const CustomTheme = () => <div className="custom-theme" />

describe('<Uploader />', () => {
  describe('by default', () => {
    const component = mount(<Uploader />)

    test('has default props', () => {
      expect(component).to.have.props({
        name: null,
        acceptedFiles: 'image/*',
        maxSize: null,
        fileName: null,
        theme: null,
        buttonLabel: 'Choose a file',
        disabled: false,
      })
    })

    test('has a default state', () => {
      expect(component).to.have.state('fileName', null)
    })

    test('has a <Dropzone /> with default props', () => {
      const dropzone = component.find(Dropzone).first()

      expect(dropzone).toHaveLength(1)
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
        disabled
        fileName="custom-filename.jpg"
        deletable={ false }
      />
    )
    const theme = component.find(CustomTheme).first()

    test('renders a custom theme', () => {
      expect(component).to.have.descendants('.custom-theme')
    })

    describe('with a buttonLabel prop', () => {
      test('passes buttonLabel prop to the custom theme', () => {
        expect(theme).to.have.prop('buttonLabel', 'Custom label')
      })
    })

    describe('with a disabled prop', () => {
      test('passes disabled prop to the custom theme', () => {
        expect(theme).to.have.prop('disabled', true)
      })
    })

    describe('with a deletable prop', () => {
      test('passes deletable prop to the custom theme', () => {
        expect(theme).to.have.prop('deletable', false)
      })
    })
  })
})
