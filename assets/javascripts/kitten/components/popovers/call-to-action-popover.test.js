import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Popover } from 'kitten/components/popovers/popover'
import { CallToActionPopover } from 'kitten/components/popovers/call-to-action-popover'
import { Button } from 'kitten/components/buttons/button'

describe('CallToActionPopover', () => {
  const defaultComponent = shallow(
    <Popover />)

  it('renders <div class="k-Popover">', () => {
    expect(defaultComponent.find('.k-Popover')).to.have.length(1)
  })

  it('renders <div> without illustration', () => {
    expect(defaultComponent).not.to.have.attr('illustration')
  })

  it('renders <div> without buttons', () => {
    expect(defaultComponent).not.to.have.attr('buttons')
  })

  it('has a content', () => {
    expect(defaultComponent).to.have.text('')
  })
})

describe('<CallToActionPopover />', () => {

  describe('basic props', () => {
    const component = shallow(
      <Popover className="k-Popover__custom" />
    )

    it('renders a <div class="k-Popover" />', () => {
      expect(component).to.have.className('k-Popover__custom')
    })
  })
})
