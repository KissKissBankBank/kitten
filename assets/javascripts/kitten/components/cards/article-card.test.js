import React from 'react'
import { shallow, mount } from 'enzyme'
import { ArticleCard } from 'kitten/components/cards/article-card'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { ButtonImage } from 'kitten/components/buttons/button-image'

describe('<ArticleCard />', () => {
  let component
  let buttonImage

  describe('by default', () => {
    beforeEach(() => {
      component = mount(<ArticleCard />)
    })

    test('is a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    test('has an image container', () => {
      expect(component).to.have.descendants('.k-Card__imageContainer')
    })

    test('has a <img /> with good class', () => {
      expect(component).to.have.descendants('img')
      expect(component).to.have.descendants('.k-Card__image')
    })

    test('has a <ButtonImage /> component', () => {
      expect(component).to.have.descendants(ButtonImage)
    })

    test('has not a <Title /> component', () => {
      expect(component).to.have.descendants(Title)
    })

    test('has 3 <Text /> components', () => {
      expect(component).to.have.exactly(3).descendants(Text)
    })

    test('has <HorizontalStroke /> component', () => {
      expect(component).to.have.descendants(HorizontalStroke)
    })
  })

  describe('with href prop', () => {
    beforeEach(() => {
      component = mount(<ArticleCard href="#" />)
    })

    test('is a <a />', () => {
      expect(component).to.have.tagName('a')
    })

    test('has a href attribute', () => {
      expect(component).to.have.attr('href', '#')
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
    })

    test('has an image with `#` src', () => {
      expect(component.find('.k-Card__image')).to.have.prop('src', '#foobar')
    })

    test('has an image with alt description', () => {
      expect(component.find('.k-Card__image')).to.have.prop('alt', 'FooBar')
    })

    test('has an image with a custom style', () => {
      expect(component.find('.k-Card__image'))
        .to.have.style('cursor', 'crosshair')
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

    test('has good props on <ButtonImage />', () => {
      expect(buttonImage)
        .to.have.prop('img').toEqual({
          src: '#foobar',
          alt: 'FooBar',
          style: {
            cursor: 'crosshair',
          },
        })
    })
  })
})
