import React from 'react'
import { ImageWithCaption } from '../../../components/images/image-with-caption'

describe('<ImageWithCaption />', () => {
  describe('by default', () => {
    const component = shallow(<ImageWithCaption />)
    const figure = component.find('figure')
    const image = figure.find('img')
    const figcaption = figure.find('figcaption')

    it('renders a <figure />', () => {
      expect(figure.is('figure')).toBe(true)
      expect(figure.hasClass('k-ImageWithCaption')).toBe(true)
    })

    it('renders a <img />', () => {
      expect(image.is('img')).toBe(true)
      expect(image.hasClass('k-ImageWithCaption__img')).toBe(true)
    })

    it('renders a <figcaption />', () => {
      expect(figcaption.is('figcaption')).toBe(true)
      expect(figcaption.hasClass('k-ImageWithCaption__caption')).toBe(true)
    })
  })

  describe('children prop', () => {
    const component = mount(
      <ImageWithCaption>Example content</ImageWithCaption>,
    )

    it('adds a children element', () => {
      expect(component.text()).toBe('Example content')
    })
  })

  describe('with <img /> props', () => {
    const component = mount(
      <ImageWithCaption
        imageSrc="test"
        imageAlt="FooBar"
        imageWidth="42"
        imageHeight="42"
      />,
    )
    const image = component.find('.k-ImageWithCaption__img')

    it('renders an image with good attributes', () => {
      expect(image).toHaveLength(1)
      expect(image.props().src).toBe('test')
      expect(image.props().alt).toBe('FooBar')
      expect(image.props().width).toBe('42')
      expect(image.props().height).toBe('42')
    })
  })

  describe('with captionProps prop', () => {
    const component = mount(
      <ImageWithCaption captionProps={{ title: 'custom' }} />,
    )

    const caption = component.find('.k-ImageWithCaption__caption')

    it('renders a title attribute', () => {
      expect(caption.props().title).toBe('custom')
    })
  })
})
