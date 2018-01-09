import React from 'react'
import { ArticleCard } from 'kitten/components/cards/article-card'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { ButtonImage } from 'kitten/components/buttons/button-image'

describe('<ArticleCard />', () => {
  let component
  let buttonImage
  let cardImage

  describe('by default', () => {
    beforeEach(() => {
      component = mount(<ArticleCard />)
    })

    it('is a <div />', () => {
      expect(component.render().is('div')).toBe(true)
    })

    it('has an image container', () => {
      expect(component.find('.k-Card__imageContainer').exists()).toBe(true)
    })

    it('has a <img /> with good class', () => {
      expect(component.find('img').exists()).toBe(true)
      expect(component.find('.k-Card__image').exists()).toBe(true)
    })

    it('has a <ButtonImage /> component', () => {
      expect(component.find(ButtonImage)).toHaveLength(1)
    })

    it('has not a <Title /> component', () => {
      expect(component.find(Title)).toHaveLength(1)
    })

    it('has 3 <Text /> components', () => {
      expect(component.find(Text)).toHaveLength(3)
    })

    it('has <HorizontalStroke /> component', () => {
      expect(component.find(HorizontalStroke)).toHaveLength(1)
    })
  })

  describe('with href prop', () => {
    beforeEach(() => {
      component = mount(<ArticleCard href="#" />)
    })

    it('is a <a />', () => {
      expect(component.render().is('a')).toBe(true)
    })

    it('has a href attribute', () => {
      expect(component.props().href).toBe('#')
    })
  })

  describe('with image props', () => {
    beforeEach(() => {
      component = mount(
        <ArticleCard
          imageProps={ {
            src: '#foobar',
            alt: 'FooBar',
            style: {
              cursor: 'crosshair',
            },
          } }
        />
      )

      cardImage = component.find('.k-Card__image')
    })


    it('has an image with `#` src', () => {
      expect(cardImage.props().src).toBe('#foobar')
    })

    it('has an image with alt description', () => {
      expect(cardImage.props().alt).toBe('FooBar')
    })

    it('has an image with a custom style', () => {
      expect(cardImage.props().style).toMatchObject({ cursor: 'crosshair' })
    })
  })

  describe('with avatar props', () => {
    beforeEach(() => {
      component = mount(
        <ArticleCard
          avatarProps={ {
            src: '#foobar',
            alt: 'FooBar',
            style: {
              cursor: 'crosshair',
            },
          } }
        />
      )

      buttonImage = component.find(ButtonImage).first()
    })

    it('has good props on <ButtonImage />', () => {
      expect(buttonImage.props().img).toMatchObject({
        src: '#foobar',
        alt: 'FooBar',
        style: {
          cursor: 'crosshair',
        },
      })
    })
  })
})
