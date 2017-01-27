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
})

describe('<Popover />', () => {

  describe('basic props', () => {
    const component = shallow(
      <Popover>
      </Popover>
    )
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

        it('has achildren', () => {
          expect(componentWithCloseButton.children()).to.have.tagName('svg')
        })
      })

    })
  })
})

describe('with content', () => {

})

