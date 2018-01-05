import React from 'react'
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
      const locale = { locale: 'fr' }
      const component = shallow(
        <RichTextInput config={ locale } />
      )
      const expectedProps = { config: locale }

      expect(component.instance().props).to.contains.any.keys(expectedProps)
    })
  })

  describe('with toolbar prop', () => {
    it('pass the toolbar prop to <RichTextInput />', () => {
      const toolbar =
        [{
          name: 'basicstyles',
          items: [
            'Bold', 'Italic', 'Underline', 'Link', 'Image',
          ],
        }]
      const component = shallow(
        <RichTextInput toolbar={ toolbar } />
      )
      const expectedProps = { toolbar: toolbar }

      expect(component.instance().props).to.contains.any.keys(expectedProps)
    })
  })
})
