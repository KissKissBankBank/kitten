import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { SimpleUploader } from 'kitten/components/uploaders/simple-uploader'
import { Uploader } from 'kitten/components/uploaders/uploader'

describe('<SimpleUploader />', () => {
  describe('by default', () => {
    const component = mount(<SimpleUploader />)
    const theme = component.find('.k-SimpleUploader')

    it('it has an <Uploader />', () => {
      expect(component.find(Uploader)).to.have.length(1)
    })

    it('has children with good classes', () => {
      expect(component.find('.k-SimpleUploader')).to.be.present()
      expect(component.find('.k-SimpleUploader__button')).to.be.present()
      expect(component.find('.k-SimpleUploader__text')).to.be.present()
    })

    it('has a default button label', () => {
      expect(component.find('.k-SimpleUploader__button'))
        .to.have.text('Choose a file')
    })

    it('doesn\'t have a delete button', () => {
      expect(component.find('.k-SimpleUploader__buttonIcon')).to.be.blank()
    })
  })

  describe('with buttonLabel prop', () => {
    const component = mount(<SimpleUploader buttonLabel="Custom label" />)

    it('has a custom label', () => {
      expect(component.find('.k-SimpleUploader__button'))
        .to.have.text('Custom label')
    })
  })

  describe('with fileName prop', () => {
    const component = mount(<SimpleUploader fileName="custom-filename.png" />)

    it('has a custom filename', () => {
      expect(component.find('.k-SimpleUploader__text'))
        .to.have.text('custom-filename.png')
    })

    it('has a delete button', () => {
      expect(component.find('.k-SimpleUploader__buttonIcon')).to.be.present()
    })
  })

  describe('with disabled prop', () => {
    describe('with a fileName prop', () => {
      const component = mount(<SimpleUploader
        fileName="custom-filename.png"
        disabled />
      )
      const buttonIcon = component.find('.k-SimpleUploader__buttonIcon')
      const uploadButton = component.find('.k-SimpleUploader__button')

      it('adds a disabled attribute to the delete button', () => {
        expect(buttonIcon).to.have.attr('disabled')
      })

      it('adds a disabled attribute to the upload button', () => {
        expect(uploadButton).to.have.attr('disabled')
      })
    })

    describe('without a fileName prop', () => {
      const component = mount(<SimpleUploader disabled={ true } />)
      const uploadButton = component.find('.k-SimpleUploader__button')

      it('adds a disabled attribute to the upload button', () => {
        expect(uploadButton).to.have.attr('disabled')
      })
    })
  })
})
