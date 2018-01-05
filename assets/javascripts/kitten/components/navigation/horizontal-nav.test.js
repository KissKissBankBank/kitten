import React from 'react'
import { shallow, mount } from 'enzyme'
import { HorizontalNav } from 'kitten/components/navigation/horizontal-nav'

describe('<HorizontalNav />', () => {
  const component = shallow(
    <HorizontalNav
      items={ [
        { text: 'Nav link 1', href: '#foobar' },
        { text: 'Nav link 2', href: '#foobar' },
        { text: 'Nav link 3', href: '#foobar' },
        { text: 'Nav link 4', href: '#foobar' },
      ] }
    />
  )
  const link = component.find('.k-HorizontalNav__item').first()

  test('renders a <div class="k-HorizontalNav" />', () => {
    expect(component.hasClass('k-HorizontalNav')).to.equal(true)
  })

  test('has a element', () => {
    expect(component.find('li.k-HorizontalNav__element')).toHaveLength(4)
  })

  test('renders items', () => {
    expect(component.find('.k-HorizontalNav__item')).toHaveLength(4)
  })

  test('has an item with clickable link', () => {
    expect(link).to.have.attr('href', '#foobar')
  })

  describe('center props', () => {
    const component = shallow(
      <HorizontalNav center />
    )

    test('renders a className', () => {
      expect(component.hasClass('k-HorizontalNav--center')).to.equal(true)
    })
  })

  describe('height props', () => {
    const component = mount(
      <HorizontalNav
        items={ [
          { text: 'Nav link 1' },
        ] }
        height="auto"
      />
    )
    const item = component.find('.k-HorizontalNav__item')

    test('renders a horizontalNav with auto height', () => {
      expect(item).to.have.style('height', 'auto')
    })
  })


  describe('with custom classes/id', () => {
    const component = shallow(
      <HorizontalNav
        id="custom-id"
        className="custom-class"
        elementClassName="element-custom-class"
        items={ [
          { text: 'Nav link 1', className: 'item-custom-class' },
          { text: 'Nav link 2', className: 'item-custom-class' },
          { text: 'Nav link 3', className: 'item-custom-class' },
          { text: 'Nav link 4', className: 'item-custom-class' },
        ] }
      />
    )

    test('renders the right classes', () => {
      expect(component).to.have.id('custom-id')

      expect(component.hasClass('custom-class')).to.equal(true)

      expect(component.find('.k-HorizontalNav__element').first())
        .to.have.className('element-custom-class')

      expect(component.find('.k-HorizontalNav__item').first())
        .to.have.className('item-custom-class')
    })

    describe('with HTML in items', () => {
      const component = shallow(
        <HorizontalNav
          items={ [
            { text: 'Nav\n1', className: 'item-1' },
          ] }
        />
      )

      test('transforms line break with <br/>', () => {
        expect(component.find('.item-1')).to.have.html().toMatch(/Nav<br\/>1/)
      })
    })
  })
})
