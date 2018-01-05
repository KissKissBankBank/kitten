import React from 'react'
import { mount } from 'enzyme'
import { SimpleUploader } from 'kitten/components/uploaders/simple-uploader'
import { Uploader } from 'kitten/components/uploaders/uploader'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'

describe('<SimpleUploader />', () => {
  describe('by default', () => {
    const component = mount(<SimpleUploader />)
    const theme = component.find('.k-SimpleUploader')

    test('it has an <Uploader />', () => {
      expect(component.find(Uploader)).toHaveLength(1)
    })

    test('has children with good classes', () => {
      expect(component.find('.k-SimpleUploader')).to.be.present()
      expect(component.find('.k-SimpleUploader__button')).to.be.present()
      expect(component.find('.k-SimpleUploader__link')).to.be.present()
      expect(component.find('.k-SimpleUploader__text')).to.be.present()
    })

    test('has a default button label', () => {
      expect(component.find('.k-SimpleUploader__button'))
        .to.have.text('Choose a file')
    })

    test('doesn\'t have a delete button', () => {
      expect(component.find('.k-SimpleUploader__buttonIcon')).to.be.blank()
    })
  })

  describe('with buttonLabel prop', () => {
    const component = mount(<SimpleUploader buttonLabel="Custom label" />)

    test('has a custom label', () => {
      expect(component.find('.k-SimpleUploader__button'))
        .to.have.text('Custom label')
    })
  })

  describe('with fileName prop', () => {
    const component = mount(<SimpleUploader fileName="custom-filename.png" />)
    const deleteButton = component.find(ButtonIcon)

    test('has a custom filename', () => {
      expect(component.find('.k-SimpleUploader__text'))
        .to.have.text('custom-filename.png')
    })

    test('has a delete button', () => {
      expect(deleteButton).to.be.present()
    })

    test('passes the right props to the delete button', () => {
      const expectedProps = {
        className: 'k-SimpleUploader__buttonIcon',
        size: 'micro',
      }

      expect(deleteButton.props()).to.contains(expectedProps)
      expect(typeof deleteButton.props().onClick).toBe('function')
    })
  })

  describe('with disabled prop', () => {
    describe('with a fileName prop', () => {
      const component = mount(<SimpleUploader
        fileName="custom-filename.png"
        disabled />
      )
      const buttonIcon = component.find(ButtonIcon)
      const uploadButton = component.find('.k-SimpleUploader__button')

      test('adds a disabled attribute to the delete button', () => {
        expect(buttonIcon).to.have.attr('disabled')
      })

      test('doesn\'t pass a onClick prop to the delete button', () => {
        expect(buttonIcon.props().onClick).toBeNull()
      })

      test('adds a disabled attribute to the upload button', () => {
        expect(uploadButton).to.have.attr('disabled')
      })
    })

    describe('without a fileName prop', () => {
      const component = mount(<SimpleUploader disabled />)
      const uploadButton = component.find('.k-SimpleUploader__button')

      test('adds a disabled attribute to the upload button', () => {
        expect(uploadButton).to.have.attr('disabled')
      })
    })
  })

  describe('with deletable prop at false', () => {
    const component = mount(<SimpleUploader
      fileName="custom-filename.png"
      deletable={ false }
    />)
    const deleteButton = component.find(ButtonIcon)

    test('does not have a delete button', () => {
      expect(deleteButton).toHaveLength(0)
    })
  })
})
