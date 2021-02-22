import React from 'react'
import renderer from 'react-test-renderer'
import { SimpleCard } from './index'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'

describe('<SimpleCard />', () => {
  let component

  describe('by default', () => {
    beforeAll(() => {
      component = renderer.create(<SimpleCard />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
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
        noMargin: false,
        className: 'k-Card__title',
      })
    })
  })

  describe('with subtitle prop', () => {
    beforeEach(() => {
      component = mount(<SimpleCard subtitle="Simple card subtitle" />)
    })

    it('has a <Text /> with good content', () => {
      expect(component.find(Text).render().text()).toBe('Simple card subtitle')
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
    it('matches snapshot', () => {
      component = renderer
        .create(<SimpleCard horizontalStroke={false} />)
        .toJSON()

      expect(component).toMatchSnapshot()
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

  describe('with withPlayerButtonOnImage props', () => {
    beforeEach(() => {
      component = renderer
        .create(<SimpleCard withPlayerButtonOnImage />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with imageContainerRatio props', () => {
    beforeEach(() => {
      component = renderer
        .create(<SimpleCard imageContainerRatio={16 / 9} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
