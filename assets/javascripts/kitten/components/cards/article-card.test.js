import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { ArticleCard } from 'kitten/components/cards/article-card'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { ButtonImage } from 'kitten/components/buttons/button-image'

describe('<ArticleCard />', () => {
  let component
  let buttonImage
  let title

  describe('by default', () => {
    beforeEach(() => {
      component = mount(<ArticleCard />)
    })

    it('is a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    it('has an image container', () => {
      expect(component).to.have.descendants('.k-Card__imageContainer')
    })

    it('has a <img /> with good class', () => {
      expect(component).to.have.descendants('img')
      expect(component).to.have.descendants('.k-Card__image')
    })

    it('has a <ButtonImage /> component', () => {
      expect(component).to.have.descendants(ButtonImage)
    })

    it('has not a <Title /> component', () => {
      expect(component).to.have.descendants(Title)
    })

    it('has 3 <Text /> components', () => {
      expect(component).to.have.exactly(3).descendants(Text)
    })

    it('has <HorizontalStroke /> component', () => {
      expect(component).to.have.descendants(HorizontalStroke)
    })
  })

  describe('with href prop', () => {
    beforeEach(() => {
      component = mount(<ArticleCard href="#" />)
    })

    it('is a <a />', () => {
      expect(component).to.have.tagName('a')
    })

    it('has a href attribute', () => {
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

    it('has an image with `#` src', () => {
      expect(component.find('.k-Card__image')).to.have.prop('src', '#foobar')
    })

    it('has an image with alt description', () => {
      expect(component.find('.k-Card__image')).to.have.prop('alt', 'FooBar')
    })

    it('has an image with a custom style', () => {
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

    it('has good props on <ButtonImage />', () => {
      expect(buttonImage)
        .to.have.prop('img').deep.equal({
          src: '#foobar',
          alt: 'FooBar',
          style: {
            cursor: 'crosshair',
          },
        })
    })
  })

  describe('with title props', () => {
    beforeEach(() => {
      component = mount(
        <ArticleCard
          titleProps={{ tag: 'h2' }}
        />
      )

      title = component.find(Title).first()
    })

    it('has a title with h2 tag', () => {
      expect(title).to.have.prop('tag', 'h2')
    })
  })
})
