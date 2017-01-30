import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Popover } from 'kitten/components/popovers/popover'
import { Button } from 'kitten/components/buttons/button'

describe('Popover', () => {
  const defaultComponent = shallow(
    <Popover />)

  it('renders <div class="k-Popover">', () => {
    expect(defaultComponent.find('.k-Popover')).to.have.length(1)
  })

  it('renders <div class= "k-Popover__content">', () => {
    expect(defaultComponent.find('.k-Popover__content')).to.have.length(0)
  })
})

describe('<Popover />', () => {

  describe('basic props', () => {
    const component = shallow(
      <Popover className="k-Popover"/>
    )

    it('renders a <Popover class="k-Popover" />', () => {
      expect(component).to.have.className('k-Popover')
    })
  })
})

describe('with close button', () => {

  describe('<button />', () => {

    describe('basic props', () => {
      const componentWithCloseButton = shallow(
        <Button title="close"
                aria-label="close"
                onClick=""
                className="k-ButtonIcon k-ButtonIcon--custom" />)

      it('renders a <Button className="k-ButtonIcon">', () => {
        expect(componentWithCloseButton).to.have.className('k-ButtonIcon')
        expect(componentWithCloseButton).to.have.className('k-ButtonIcon--custom')
      })

      describe('children', () => {
        const componentWithCloseButton = shallow(
          <Button>
            <svg />
          </Button>)

        it('has children', () => {
          expect(componentWithCloseButton.children()).to.have.tagName('svg')
        })
      })
    })
  })
})


