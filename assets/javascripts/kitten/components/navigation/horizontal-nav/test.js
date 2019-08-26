import React from 'react'
import { HorizontalNav } from './index'

describe('<HorizontalNav />', () => {
  const component = shallow(
    <HorizontalNav
      items={[
        { key: 'item-1', text: 'Nav link 1', href: '#foobar' },
        { key: 'item-2', text: 'Nav link 2', href: '#foobar' },
        { key: 'item-3', text: 'Nav link 3', href: '#foobar' },
        { key: 'item-4', text: 'Nav link 4', href: '#foobar' },
      ]}
    />,
  )
  const link = component.find('.k-HorizontalNav__item').first()

  it('renders a <div class="k-HorizontalNav" />', () => {
    expect(component.hasClass('k-HorizontalNav')).toBe(true)
  })

  it('has a element', () => {
    expect(component.find('li.k-HorizontalNav__element')).toHaveLength(4)
  })

  it('renders items', () => {
    expect(component.find('.k-HorizontalNav__item')).toHaveLength(4)
  })

  it('has an item with clickable link', () => {
    expect(link.props().href).toBe('#foobar')
  })

  describe('center props', () => {
    const component = shallow(<HorizontalNav center />)

    it('renders a className', () => {
      expect(component.hasClass('k-HorizontalNav--center')).toBe(true)
    })
  })

  describe('height props', () => {
    const component = mount(
      <HorizontalNav
        items={[{ key: 'item-1', text: 'Nav link 1' }]}
        height="auto"
      />,
    )
    const item = component.find('.k-HorizontalNav__item')

    it('renders a horizontalNav with auto height', () => {
      expect(item.props().style).toMatchObject({ height: 'auto' })
    })
  })

  describe('with custom classes/id', () => {
    const component = shallow(
      <HorizontalNav
        id="custom-id"
        className="custom-class"
        elementClassName="element-custom-class"
        items={[
          { key: 'item-1', text: 'Nav link 1', className: 'item-custom-class' },
          { key: 'item-2', text: 'Nav link 2', className: 'item-custom-class' },
          { key: 'item-3', text: 'Nav link 3', className: 'item-custom-class' },
          { key: 'item-4', text: 'Nav link 4', className: 'item-custom-class' },
        ]}
      />,
    )

    it('renders the right classes', () => {
      expect(component.props().id).toBe('custom-id')
      expect(component.hasClass('custom-class')).toBe(true)
      expect(
        component
          .find('.k-HorizontalNav__element')
          .first()
          .hasClass('element-custom-class'),
      ).toBe(true)

      expect(
        component
          .find('.k-HorizontalNav__item')
          .first()
          .hasClass('item-custom-class'),
      ).toBe(true)
    })

    describe('with HTML in items', () => {
      const component = shallow(
        <HorizontalNav
          items={[{ key: 'item-1', text: 'Nav\n1', className: 'item-1' }]}
        />,
      )

      it('transforms line break with <br/>', () => {
        expect(component.find('.item-1').html()).toMatch(/Nav<br\/>1/)
      })
    })

    describe('with markdown prop to false', () => {
      const component = shallow(
        <HorizontalNav
          markdown={false}
          items={[{ key: 'item-1', text: '**Nav**', className: 'item-1' }]}
        />,
      )

      it("doesn't transform ** with <strong />", () => {
        expect(component.find('.item-1').html()).not.toMatch(
          /<strong>Nav<\/strong>/,
        )
      })
    })
  })
})
