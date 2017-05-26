import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { RichTextInput } from 'kitten/components/form/rich-text-input'

describe('<RichTextInput />', () => {
  describe('By default', () => {
    const component = shallow(<RichTextInput />)

    it('renders a div', () => {
      expect(component).to.tagName('div')
    })

  })

  describe('with config prop', () => {
    it('pass the config prop to <RichTextInput />', () => {
      const component = shallow(
        <RichTextInput config={ {
          locale: 'fr'
        }} />
      )

      const expectedProps = {
        config: {
          locale: 'fr'
        },
      }

      expect(component.instance().props).to.contains.any.keys(expectedProps)
    })
  })

  describe('with toolbar prop', () => {
    it('pass the toolbar prop to <RichTextInput />', () => {
      const component = shallow(
        <RichTextInput toolbar={
          [{
            name: 'basicstyles',
            items: [
              'Bold', 'Italic', 'Underline', 'Link', 'Image',
            ],
          }]
        } />
      )

      const expectedProps = {
        toolbar: [{
          name: 'basicstyles',
          items: [
            'Bold', 'Italic', 'Underline', 'Link', 'Image',
          ],
        }]
      }

      expect(component.instance().props).to.contains.any.keys(expectedProps)
    })
  })
})
