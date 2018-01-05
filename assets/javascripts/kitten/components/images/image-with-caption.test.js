import React from 'react'
import { mount, shallow } from 'enzyme'
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
      expect(figure).to.have.tagName('figure')
      expect(figure.hasClass('k-ImageWithCaption')).toBe(true)
    })

    it('renders a <img />', () => {
      expect(image).to.have.tagName('img')
      expect(image.hasClass('k-ImageWithCaption__img')).toBe(true)
    })

    it('renders a <figcaption />', () => {
      expect(figcaption).to.have.tagName('figcaption')
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
      expect(component).to.have.text('Example content')
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
      expect(image).to.have.attr('src', 'test')
      expect(image).to.have.attr('alt')
      expect(image).to.have.attr('width')
      expect(image).to.have.attr('height')
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
      expect(caption).to.have.attr('title', 'custom')
    })
  })
})
