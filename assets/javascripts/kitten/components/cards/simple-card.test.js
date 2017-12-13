import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { SimpleCard } from 'kitten/components/cards/simple-card'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'

describe('<SimpleCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = mount(<SimpleCard />)
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

    it('has not a <Title /> component', () => {
      expect(component).to.have.not.descendants(Title)
    })

    it('has not <Text /> components', () => {
      expect(component).to.have.not.descendants(Text)
    })
  })

  describe('with href prop', () => {
    beforeEach(() => {
      component = mount(<SimpleCard href="#" />)
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
        <SimpleCard
          imageProps={ {
            src: '#foobar',
            alt: 'FooBar',
          } }
        />
      )
    })

    it('has an image with `#` src', () => {
      expect(component.find('img')).to.have.prop('src', '#foobar')
    })

    it('has an image with alt description', () => {
      expect(component.find('img')).to.have.prop('alt', 'FooBar')
    })
  })

  describe('with title prop', () => {
    beforeEach(() => {
      component = mount(<SimpleCard title="Simple card title" />)
    })

    it('has a <Title /> with good content', () => {
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

    it('has a <Text /> with good content', () => {
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

    it('has a <Text /> with good content', () => {
      expect(component.find(Text)).to.have.text('Simple card subtitle')
      expect(component.find(Text)).to.have.props({
        weight: 'light',
        size: 'micro',
        lineHeight: 'normal',
      })
    })
  })
})
