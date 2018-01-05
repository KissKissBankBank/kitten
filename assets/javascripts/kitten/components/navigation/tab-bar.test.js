import React from 'react'
import { shallow } from 'enzyme'
import { TabBar } from 'kitten/components/navigation/tab-bar'

describe('<TabBar />', () => {
  const component = shallow(
    <TabBar items={ [
      { text: 'Item 1' },
      { text: 'Item 2' },
      { text: 'Item 3' },
    ] } />
  )

  it('renders a <div class="k-TabBar" />', () => {
    expect(component).to.have.className('k-TabBar')
  })

  it('has a nav', () => {
    expect(component.find('.k-TabBar__nav')).toHaveLength(1)
  })

  it('has a list', () => {
    expect(component.find('ul.k-TabBar__list')).toHaveLength(1)
  })

  it('renders items', () => {
    expect(component.find('.k-TabBar__item')).toHaveLength(3)
  })

  describe('with custom classes/id', () => {
    const component = shallow(
      <TabBar
        id="custom-id"
        className="custom-class"
        navClassName="nav-custom-class"
        listClassName="list-custom-class"
        items={ [
          { text: 'Item 1', className: 'item-custom-class' },
          { text: 'Item 2', className: 'item-custom-class' },
          { text: 'Item 3', className: 'item-custom-class' },
        ] }
      />
    )

    it('renders the right classes', () => {
      expect(component).to.have.id('custom-id')
      expect(component).to.have.className('custom-class')
      expect(component.find('.k-TabBar__nav'))
        .to.have.className('nav-custom-class')
      expect(component.find('.k-TabBar__list'))
        .to.have.className('list-custom-class')
      expect(component.find('.k-TabBar__item').first())
        .to.have.className('item-custom-class')
    })

    describe('with HTML in items', () => {
      const component = shallow(
        <TabBar items={ [
          { text: 'Item\n1', className: 'item-1' },
        ] } />
      )

      it('transforms line break with <br/>', () => {
        expect(component.find('.item-1')).to.have.html().toMatch(/Item<br\/>1/)
      })
    })
  })
})
