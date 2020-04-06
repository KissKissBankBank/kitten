import React from 'react'
import sinon from 'sinon'
import { ImageCropper } from '../../components/images/image-cropper'
import Cropper from 'react-cropper'
import { SimpleUploader } from '../../components/uploaders/simple-uploader'

describe('<ImageCropper />', () => {
  const sandbox = sinon.createSandbox()

  afterEach(() => {
    sandbox.restore()
  })

  describe('by default', () => {
    const component = mount(<ImageCropper />)

    it('has an <ImageCropper />', () => {
      expect(component.find(ImageCropper)).toHaveLength(1)
    })

    it('has default props', () => {
      const expectedProps = {
        name: 'picture',
        imageSrc: null,
        fileName: null,
        uploaderErrorLabel: 'You have an error on upload.',
        sliderMin: 0,
        sliderMax: 500,
        aspectRatio: 16 / 9,
        maxSize: 5 * 1024 * 1024, // 5 Mo.
        acceptedFiles: '.jpg,.jpeg,.gif,.png',
        label: 'Lorem ipsum…',
        cropperInfo: 'Move the image…',
        sliderTitle: 'Zoom…',
        buttonLabel: 'Choose a file…',
        description: 'Lorem ipsum…',
        disabled: false,
      }

      expect(component.props()).toMatchObject(expectedProps)
      expect(typeof component.props().onChange).toBe('function')
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

      expect(component.state()).toEqual(defaultState)
    })

    it("doesn't render a Cropper", () => {
      const cropper = component.find(Cropper)

      expect(cropper).toHaveLength(0)
    })

    it('renders a SimpleUploader', () => {
      const uploader = component.find(SimpleUploader)

      expect(uploader).toHaveLength(1)
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

      expect(uploader.props()).toMatchObject(expectedProps)
      expect(typeof uploader.props().onSuccess).toBe('function')
      expect(typeof uploader.props().onError).toBe('function')
      expect(typeof uploader.props().onReset).toBe('function')
    })
  })

  describe('with imageSrc prop', () => {
    const component = mount(<ImageCropper imageSrc="custom-file.jpg" />)

    describe('without cropperHeight and cropperWidth set in state', () => {
      it("doesn't render a Cropper component", () => {
        const cropper = component.find(Cropper)

        expect(cropper).toHaveLength(0)
      })
    })

    describe('with cropperHeight and cropperWidth set in state', () => {
      global.XMLHttpRequest = sandbox.useFakeXMLHttpRequest()
      const component = mount(<ImageCropper imageSrc="custom-file.jpg" />)
      component.setState({ cropperHeight: 100, cropperWidth: 200 })
      const cropper = component.find(Cropper)

      it(' renders a Cropper component', () => {
        expect(cropper).toHaveLength(1)
      })

      it('passes the right props to the Cropper component', () => {
        const expectedProps = {
          className: 'k-Cropper',
          src: 'custom-file.jpg',
          aspectRatio: 16 / 9,
          viewMode: 3,
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

        expect(cropper.props()).toMatchObject(expectedProps)
        expect(cropper.props().style).toMatchObject({ width: 200, height: 100 })
      })

      it('renders the slider and the cropper info', () => {
        const slider = component.find('.k-Slider')

        expect(slider).toHaveLength(1)
        expect(component.find('Label').at(1).text()).toBe('Zoom…')
        expect(component.find('Paragraph').at(1).text()).toBe('Move the image…')
      })

      describe('with disabled prop', () => {
        const component = mount(
          <ImageCropper disabled imageSrc="custom-file.jpg" />,
        )
        component.setState({ cropperHeight: 100, cropperWidth: 200 })
        const cropper = component.find(Cropper)

        it('passes dragMode prop to `none` to the Cropper component', () => {
          expect(cropper.props().dragMode).toEqual('none')
        })

        it("doesn't render the slider and the cropper info", () => {
          const slider = component.find('.k-Slider')

          expect(slider).toHaveLength(0)
          expect(component.find('Label').text()).not.toEqual(
            expect.stringMatching(/Zoom…/),
          )
          expect(component.find('Paragraph').text()).not.toEqual(
            expect.stringMatching(/Move the image…/),
          )
        })
      })
    })
  })
  describe('with deletable prop at false', () => {
    const component = mount(
      <ImageCropper deletable={false} imageSrc="custom-file.jpg" />,
    )
    const uploader = component.find(SimpleUploader)

    it("doesn't render the delete button", () => {
      expect(uploader.props()).toMatchObject({ deletable: false })
    })
  })
})
