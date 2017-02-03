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
      <Popover className="k-Popover k-Popover--custom"/>
    )

    it('renders a <div class="k-Popover" />', () => {
      expect(component).to.have.className('k-Popover')
      expect(component).to.have.className('k-Popover--custom')
    })

    describe('children', () => {
      const component = shallow(
        <div class="k-Popover__content">
          <div class="k-Popover--custom" />
        </div>)

      it('has only text', () => {
        expect(component.find('.k-Popover__text')).to.have.className('k-Popover__content')
      })

      it('has a children', () => {
        expect(component.children()).to.have.text('')
      })
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


