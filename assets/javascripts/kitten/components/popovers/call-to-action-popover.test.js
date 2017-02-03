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
    expect(defaultComponent.find('.k-Popover__illustration')).to.have.length(0)
  })

  it('renders <div> without buttons', () => {
    expect(defaultComponent.find('buttons')).to.have.length(0)
  })

  it('has a content', () => {
    expect(defaultComponent).to.have.text('')
  })
})
