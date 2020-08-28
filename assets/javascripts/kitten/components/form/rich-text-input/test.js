import React from 'react'
import { RichTextInput } from '../../../components/form/rich-text-input'

describe('<RichTextInput />', () => {
  describe('By default', () => {
    const component = shallow(<RichTextInput />)

    it('renders a div', () => {
      expect(component.render().is('div')).toBe(true)
    })
  })

  describe('with config prop', () => {
    it('pass the config prop to <RichTextInput />', () => {
      const locale = { locale: 'fr' }
      const component = shallow(<RichTextInput config={locale} />)
      const expectedProps = { config: locale }

      expect(component.props()).toMatchObject(expectedProps)
    })
  })

  describe('with toolbar prop', () => {
    it('pass the toolbar prop to <RichTextInput />', () => {
      const toolbar = [
        {
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Underline', 'Link', 'Image'],
        },
      ]
      const component = shallow(<RichTextInput toolbar={toolbar} />)
      const expectedProps = { toolbar: toolbar }

      expect(component.props().config).toMatchObject(expectedProps)
    })
  })
})
