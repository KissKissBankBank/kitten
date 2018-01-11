import React from 'react'
import { ImageWithCaption } from 'kitten/components/images/image-with-caption'

describe ('<ImageWithCaption />', () => {
  describe('by default', () => {
    const component = shallow(
      <ImageWithCaption />
    )
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
      <ImageWithCaption>
        Example content
      </ImageWithCaption>
    )

    it('adds a children element', () => {
      expect(component.text()).toBe('Example content')
    })
  })

  describe('with <img /> props', () => {
    const component = mount(
      <ImageWithCaption
        imageSrc="test"
        imageAlt
        imageWidth
        imageHeight
      />
    )
    const image = component.find('.k-ImageWithCaption__img')

    it('renders an image with good attributes', () => {
      expect(image).toHaveLength(1)
      expect(image.props().src).toBe('test')
      expect(image.props().alt).toBeTruthy()
      expect(image.props().width).toBeTruthy()
      expect(image.props().height).toBeTruthy()
    })
  })

  describe('with captionProps prop', () => {
    const component = mount(
      <ImageWithCaption
        captionProps={{ title: 'custom' }}
      />
    )

    const caption = component.find('.k-ImageWithCaption__caption')

    it('renders a title attribute', () => {
      expect(caption.props().title).toBe('custom')
    })
  })
})
