import React from 'react'
import { Uploader } from './index'
import Dropzone from 'react-dropzone'

const CustomTheme = () => <div className="custom-theme" />

describe('<Uploader />', () => {
  describe('by default', () => {
    const component = mount(<Uploader />)

    it('has default props', () => {
      expect(component.props()).toMatchObject({
        name: null,
        acceptedFiles: 'image/*',
        maxSize: null,
        fileName: null,
        theme: null,
        buttonLabel: 'Choose a file',
        disabled: false,
      })
    })

    it('has a default state', () => {
      expect(component.state().fileName).toBeNull()
    })

    it('has a <Dropzone /> with default props', () => {
      const dropzone = component.find(Dropzone).first()

      expect(dropzone).toHaveLength(1)
      expect(dropzone.props()).toMatchObject({
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
        theme={CustomTheme}
        buttonLabel="Custom label"
        disabled
        fileName="custom-filename.jpg"
        deletable={false}
      />,
    )
    const theme = component.find(CustomTheme).first()

    it('renders a custom theme', () => {
      expect(component.find('.custom-theme').exists()).toBe(true)
    })

    describe('with a buttonLabel prop', () => {
      it('passes buttonLabel prop to the custom theme', () => {
        expect(theme.props().buttonLabel).toBe('Custom label')
      })
    })

    describe('with a disabled prop', () => {
      it('passes disabled prop to the custom theme', () => {
        expect(theme.props().disabled).toBe(true)
      })
    })

    describe('with a deletable prop', () => {
      it('passes deletable prop to the custom theme', () => {
        expect(theme.props().deletable).toBe(false)
      })
    })
  })
})
