import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Tooltip from 'kitten/components/tooltips/tooltip'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'
import ReactTooltip from 'react-tooltip'

const component = shallow(
  <Tooltip data_id="tooltip-right"
           place="right"
           children="Lorem …"/>
)

describe('<Tooltip />', () => {
  it('has a .k-Tooltip', () => {
    expect(component.find('.k-Tooltip')).to.have.length(1)
  })

  it('renders ButtonTooltipIcon', () => {
    const button = component.children().first()

    expect(button).to.have.type(ButtonTooltipIcon)
    expect(button).to.have.attr('data-tip')
    expect(button).to.have.attr('data-for', 'tooltip-right')
    expect(button).to.have.attr('data-event', 'click')
    expect(button).to.have.attr('data-dismiss', 'tooltip-right')
    expect(button).to.have.attr('aria-describedby', 'tooltip-right')

  })

  it('renders ReactTooltip', () => {
    const tooltip = component.children().last()

    expect(tooltip).to.have.type(ReactTooltip)
    expect(tooltip).to.have.id('tooltip-right')
  })
})
