import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { HorizontalNav } from 'kitten/components/navigation/horizontal-nav'

describe('<HorizontalNav />', () => {
  const component = shallow(
    <HorizontalNav
      items={ [
        { text: 'Nav link 1' },
        { text: 'Nav link 2' },
        { text: 'Nav link 3' },
        { text: 'Nav link 4' },
      ] }
    />
  )

  it('renders a <div class="k-HorizontalNav" />', () => {
    expect(component).to.have.className('k-HorizontalNav')
  })

  it('has a element', () => {
    expect(component.find('li.k-HorizontalNav__element')).to.have.length(4)
  })

  it('renders items', () => {
    expect(component.find('.k-HorizontalNav__item')).to.have.length(4)
  })

  describe('center props', () => {
    const component = shallow(
      <HorizontalNav center />
    )

    it('renders a className', () => {
      expect(component).to.have.className('k-HorizontalNav--center')
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

    it('renders a horizontalNav with auto height', () => {
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

    it('renders the right classes', () => {
      expect(component).to.have.id('custom-id')

      expect(component).to.have.className('custom-class')

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

      it('transforms line break with <br/>', () => {
        expect(component.find('.item-1')).to.have.html().match(/Nav<br\/>1/)
      })
    })
  })
})
