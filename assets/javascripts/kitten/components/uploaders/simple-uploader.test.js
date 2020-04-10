import React from 'react'
import { SimpleUploader } from '../../components/uploaders/simple-uploader'
import { Uploader } from '../../components/uploaders/uploader'
import { ButtonIcon } from '../../components/buttons/button-icon'

describe('<SimpleUploader />', () => {
  describe('by default', () => {
    const component = mount(<SimpleUploader />)

    it('it has an <Uploader />', () => {
      expect(component.find(Uploader)).toHaveLength(1)
    })

    it('has children with good classes', () => {
      expect(component.find('.k-SimpleUploader').exists()).toBeTruthy()
      expect(component.find('.k-SimpleUploader__button').exists()).toBeTruthy()
      expect(component.find('.k-SimpleUploader__link').exists()).toBeTruthy()
      expect(component.find('.k-SimpleUploader__text').exists()).toBeTruthy()
    })

    it('has a default button label', () => {
      const button = component.render().find('.k-SimpleUploader__button')

      expect(button).toHaveLength(1)
      expect(button.text()).toBe('Choose a file')
    })

    it("doesn't have a delete button", () => {
      expect(component.find('.k-SimpleUploader__buttonIcon')).toHaveLength(0)
    })
  })

  describe('with buttonLabel prop', () => {
    const component = mount(<SimpleUploader buttonLabel="Custom label" />)

    it('has a custom label', () => {
      expect(component.render().find('.k-SimpleUploader__button').text()).toBe(
        'Custom label',
      )
    })
  })

  describe('with fileName prop', () => {
    const component = mount(<SimpleUploader fileName="custom-filename.png" />)
    const deleteButton = component.find(ButtonIcon)

    it('has a custom filename', () => {
      expect(component.find('.k-SimpleUploader__text').text()).toBe(
        'custom-filename.png',
      )
    })

    it('has a delete button', () => {
      expect(deleteButton.exists()).toBe(true)
    })

    it('passes the right props to the delete button', () => {
      const expectedProps = {
        className: 'k-SimpleUploader__buttonIcon',
        size: 'nano',
      }

      expect(deleteButton.props()).toMatchObject(expectedProps)
      expect(typeof deleteButton.props().onClick).toBe('function')
    })
  })

  describe('with disabled prop', () => {
    describe('with a fileName prop', () => {
      const component = mount(
        <SimpleUploader fileName="custom-filename.png" disabled />,
      )
      const buttonIcon = component.find(ButtonIcon)
      const uploadButton = component.find('.k-SimpleUploader__button')

      it('adds a disabled attribute to the delete button', () => {
        expect(buttonIcon.props().disabled).toBeTruthy()
      })

      it("doesn't pass a onClick prop to the delete button", () => {
        expect(buttonIcon.props().onClick).toBeNull()
      })

      it('adds a disabled attribute to the upload button', () => {
        expect(uploadButton.find('[disabled]')).toBeTruthy()
      })
    })

    describe('without a fileName prop', () => {
      const component = mount(<SimpleUploader disabled />)
      const uploadButton = component.find('.k-SimpleUploader__button')

      it('adds a disabled attribute to the upload button', () => {
        expect(uploadButton.find('[disabled]')).toBeTruthy()
      })
    })
  })

  describe('with deletable prop at false', () => {
    const component = mount(
      <SimpleUploader fileName="custom-filename.png" deletable={false} />,
    )
    const deleteButton = component.find(ButtonIcon)

    it('does not have a delete button', () => {
      expect(deleteButton).toHaveLength(0)
    })
  })
})
