import React from 'react'
import { Tooltip } from './tooltip'
import { ButtonQuestionMarkIcon } from '../../components/buttons/button-question-mark-icon'
import ReactTooltip from 'react-tooltip'

const component = shallow(
  <Tooltip id="tooltip-right" place="right" children="Lorem …" />,
)

describe('<Tooltip />', () => {
  it('has a .k-Tooltip', () => {
    expect(component.find('.k-Tooltip')).toHaveLength(1)
  })

  it('renders ButtonQuestionMarkIcon', () => {
    const button = component.children().first()

    expect(button.type()).toBe(ButtonQuestionMarkIcon)
    expect(button.props()['data-tip']).toBeTruthy()
    expect(button.props()['data-for']).toBe('tooltip-right')
    expect(button.props()['data-event']).toBe('click')
    expect(button.props()['data-dismiss']).toBe('tooltip-right')
    expect(button.props()['aria-describedby']).toBe('tooltip-right')
  })

  it('renders ReactTooltip', () => {
    const tooltip = component.children().last()

    expect(tooltip.type()).toBe(ReactTooltip)
    expect(tooltip.props().id).toBe('tooltip-right')
  })
})
