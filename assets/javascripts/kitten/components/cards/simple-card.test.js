import React from 'react'
import { SimpleCard } from 'kitten/components/cards/simple-card'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'

describe('<SimpleCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = mount(<SimpleCard />)
    })

    it('is a <div />', () => {
      expect(component.render().is('div')).toBe(true)
    })

    it('has an image container', () => {
      expect(component.render().find('.k-Card__imageContainer')).toHaveLength(1)
    })

    it('has a <img /> with good class', () => {
      expect(component.find('img')).toHaveLength(1)
      expect(component.find('img').hasClass('k-Card__image')).toBe(true)
    })

    it('has not a <Title /> component', () => {
      expect(component.find(Title).exists()).toBeFalsy()
    })

    it('has not <Text /> component', () => {
      expect(component.find(Text).exists()).toBeFalsy()
    })

    it('has <HorizontalStroke /> component', () => {
      expect(component.find(HorizontalStroke).exists()).toBeTruthy()
    })
  })

  describe('with href prop', () => {
    beforeEach(() => {
      component = mount(<SimpleCard href="#" />)
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
        <SimpleCard
          imageProps={{
            src: '#foobar',
            alt: 'FooBar',
            style: {
              cursor: 'crosshair',
            },
          }}
        />,
      )
    })

    it('has an image with `#` src', () => {
      expect(component.find('img').props().src).toBe('#foobar')
    })

    it('has an image with alt description', () => {
      expect(component.find('img').props().alt).toBe('FooBar')
    })

    it('has an image with a custom style', () => {
      expect(component.find('img').props().style).toMatchObject({
        cursor: 'crosshair',
      })
    })
  })

  describe('with title prop', () => {
    beforeEach(() => {
      component = mount(<SimpleCard title="Simple card title" />)
    })

    it('has a <Title /> with good content', () => {
      expect(component.find(Title).text()).toBe('Simple card title')
      expect(component.find(Title).props()).toMatchObject({
        modifier: 'senary',
        margin: false,
        className: 'k-Card__title',
      })
    })
  })

  describe('with subtitle prop', () => {
    beforeEach(() => {
      component = mount(<SimpleCard subtitle="Simple card subtitle" />)
    })

    it('has a <Text /> with good content', () => {
      expect(
        component
          .find(Text)
          .render()
          .text(),
      ).toBe('Simple card subtitle')
      expect(component.find(Text).props()).toMatchObject({
        weight: 'regular',
        size: 'micro',
      })
    })
  })

  describe('with paragraph prop', () => {
    beforeEach(() => {
      component = mount(<SimpleCard paragraph="Simple card subtitle" />)
    })

    it('has a <Text /> with good content', () => {
      expect(component.find(Text).text()).toBe('Simple card subtitle')
      expect(component.find(Text).props()).toMatchObject({
        weight: 'light',
        size: 'micro',
        lineHeight: 'normal',
      })
    })
  })

  describe('without horizontalStroke prop', () => {
    beforeEach(() => {
      component = mount(<SimpleCard horizontalStroke={ false } />)
    })

    it('has a <Text /> with good content', () => {
      expect(component.find(HorizontalStroke).exists()).toBeFalsy()
    })
  })

  describe('with title props', () => {
    beforeEach(() => {
      component = mount(
        <SimpleCard
          title="Simple card title"
          titleProps={{
            tag: 'h2',
            className: 'custom-class',
          }}
        />,
      )
    })

    it('has a title with h2 tag', () => {
      expect(component.find(Title).props().tag).toBe('h2')
    })

    it('has a custom class on Title', () => {
      expect(component.find(Title).hasClass('custom-class')).toBe(true)
    })
  })
})
