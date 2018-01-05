import React from 'react'
import { shallow, mount } from 'enzyme'
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

    test('has not a <Title /> component', () => {
      expect(component).to.have.not.descendants(Title)
    })

    test('has not <Text /> component', () => {
      expect(component).to.have.not.descendants(Text)
    })

    test('has <HorizontalStroke /> component', () => {
      expect(component).to.have.descendants(HorizontalStroke)
    })
  })

  describe('with href prop', () => {
    beforeEach(() => {
      component = mount(<SimpleCard href="#" />)
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
        <SimpleCard
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
      expect(component.find('img')).to.have.prop('src', '#foobar')
    })

    test('has an image with alt description', () => {
      expect(component.find('img')).to.have.prop('alt', 'FooBar')
    })

    test('has an image with a custom style', () => {
      expect(component.find('img')).to.have.style('cursor', 'crosshair')
    })
  })

  describe('with title prop', () => {
    beforeEach(() => {
      component = mount(<SimpleCard title="Simple card title" />)
    })

    test('has a <Title /> with good content', () => {
      expect(component.find(Title)).to.have.text('Simple card title')
      expect(component.find(Title)).to.have.props({
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

    test('has a <Text /> with good content', () => {
      expect(component.find(Text)).to.have.text('Simple card subtitle')
      expect(component.find(Text)).to.have.props({
        weight: 'regular',
        size: 'micro',
      })
    })
  })

  describe('with paragraph prop', () => {
    beforeEach(() => {
      component = mount(<SimpleCard paragraph="Simple card subtitle" />)
    })

    test('has a <Text /> with good content', () => {
      expect(component.find(Text)).to.have.text('Simple card subtitle')
      expect(component.find(Text)).to.have.props({
        weight: 'light',
        size: 'micro',
        lineHeight: 'normal',
      })
    })
  })
})
