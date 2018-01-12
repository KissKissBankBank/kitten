import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { ImageCropper } from 'kitten/components/images/image-cropper'
import Cropper from 'react-cropper'
import { SimpleUploader } from 'kitten/components/uploaders/simple-uploader'

describe('<ImageCropper />', () => {
  const sandbox = sinon.sandbox.create()

  afterEach(() => {
    sandbox.restore()
  })

  describe('by default', () => {
    const component = mount(<ImageCropper />)

    it('has an <ImageCropper />', () => {
      expect(component.find(ImageCropper)).to.have.length(1)
    })

    it('has default props', () => {
      const expectedProps = {
        name: 'picture',
        imageSrc: null,
        fileName: null,
        uploaderErrorLabel: 'You have an error on upload.',
        sliderMin: 0,
        sliderMax: 500,
        aspectRatio: 16/9,
        maxSize: 5 * 1024 * 1024, // 5 Mo.
        acceptedFiles: '.jpg,.jpeg,.gif,.png',
        label: 'Lorem ipsum…',
        cropperInfo: 'Move the image…',
        sliderTitle: 'Zoom…',
        buttonLabel: 'Choose a file…',
        description: 'Lorem ipsum…',
        disabled: false,
      }

      expect(component.props()).to.contains(expectedProps)
      expect(component.props().onChange).to.be.a('function')
    })

    it('has a default state', () => {
      const defaultState = {
        imageSrc: null,
        imageCropSrc: null,
        fileName: null,
        touched: false,
        sliderValue: 0,
        sliderMin: 0,
        sliderMax: 500,
        hasErrorOnUploader: false,
        cropperWidth: null,
        cropperHeight: null,
        imageSrc: null,
        fileName: null,
      }

      expect(component.state()).to.eql(defaultState)
    })

    it('doesn\'t render a Cropper', () => {
      const cropper = component.find(Cropper)

      expect(cropper).to.have.length(0)
    })

    it('renders a SimpleUploader', () => {
      const uploader = component.find(SimpleUploader)

      expect(uploader).to.have.length(1)
    })

    it('passes the right props to SimpleUploader', () => {
      const uploader = component.find(SimpleUploader)
      const expectedProps = {
        name: 'picture',
        maxSize: 5 * 1024 * 1024,
        acceptedFiles: '.jpg,.jpeg,.gif,.png',
        buttonLabel: 'Choose a file…',
        fileName: null,
        disabled: false,
      }

      expect(uploader.props()).to.contains(expectedProps)
      expect(uploader.props().onSuccess).to.be.a('function')
      expect(uploader.props().onError).to.be.a('function')
      expect(uploader.props().onReset).to.be.a('function')
    })
  })

  describe('with imageSrc prop', () => {
    const component = mount(<ImageCropper imageSrc="custom-file.jpg" />)

    describe('without cropperHeight and cropperWidth set in state', () => {
      it('doesn\'t render a Cropper component', () => {
        const cropper = component.find(Cropper)

        expect(cropper).to.have.length(0)
      })
    })

    describe('with cropperHeight and cropperWidth set in state', () => {
      global.XMLHttpRequest = sandbox.useFakeXMLHttpRequest()
      const component = mount(<ImageCropper imageSrc="custom-file.jpg" />)
      component.setState({ cropperHeight: 100, cropperWidth: 200 })
      const cropper = component.find(Cropper)

      it(' renders a Cropper component', () => {
        expect(cropper).to.have.length(1)
      })

      it('passes the right props to the Cropper component', () => {
        const expectedProps = {
          className: 'k-Cropper',
          src: 'custom-file.jpg',
          aspectRatio: 16/9,
          viewMode:3,
          guides: false,
          modal: false,
          autoCropArea: 1,
          cropBoxMovable: false,
          cropBoxResizable: false,
          toggleDragModeOnDblclick: false,
          zoomOnTouch: false,
          zoomOnWheel: false,
          dragMode: 'move',
        }

        expect(cropper.props()).to.contains(expectedProps)
        expect(cropper.props().style).to.eql({ width: 200, height: 100 })
      })

      it('renders the slider and the cropper info', () => {
        const slider = component.find('.k-Slider')

        expect(slider).to.have.length(1)
        expect(component.text()).to.contains('Zoom…')
        expect(component.text()).to.contains('Move the image…')
      })

      describe('with disabled prop', () => {
        const component = mount(
          <ImageCropper
            disabled
            imageSrc="custom-file.jpg"
          />
        )
        component.setState({ cropperHeight: 100, cropperWidth: 200 })
        const cropper = component.find(Cropper)

        it('passes dragMode prop to `none` to the Cropper component', () => {
          expect(cropper.props().dragMode).to.eql('none')
        })

        it('doesn\'t render the slider and the cropper info', () => {
          const slider = component.find('.k-Slider')

          expect(slider).to.have.length(0)
          expect(component.text()).not.to.contains('Zoom…')
          expect(component.text()).not.to.contains('Move the image…')
        })
      })
    })
  })
  describe('with deletable prop at false', () => {
    const component = mount(
      <ImageCropper
        deletable={ false }
        imageSrc="custom-file.jpg"
      />
    )
    const uploader = component.find(SimpleUploader)

    it('doesn\'t render the delete button', () => {
      expect(uploader.props()).to.contain({ deletable: false })
    })
  })
})
