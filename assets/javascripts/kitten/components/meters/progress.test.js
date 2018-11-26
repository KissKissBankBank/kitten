import React from 'react'
import { Progress } from '../../components/meters/progress'

describe('<Progress />', () => {
  describe('by default', () => {
    const defaultComponent = shallow(<Progress />)

    it('renders <div class="k-Progress">', () => {
      expect(defaultComponent.find('.k-Progress')).toHaveLength(1)
    })
  })

  it('renders a <Progress class="k-Progress" />', () => {
    const component = shallow(<Progress className="k-Progress--custom" />)
    expect(component.hasClass('k-Progress--custom')).toBe(true)
  })

  it('renders a value', () => {
    const component = shallow(<Progress value={42} />)
    const slider = component.find('.k-Progress__slider')

    expect(component.props()['aria-valuenow']).toBe(42)
    expect(slider.props().style).toMatchObject({ width: '42%' })
  })

  describe('with color prop', () => {
    const component = shallow(<Progress color="red" />)
    const slider = component.find('.k-Progress__slider')

    it('renders a progress bar with red color', () => {
      expect(slider.props().style).toMatchObject({ backgroundColor: 'red' })
    })
  })

  describe('with a superior value of maximum limit', () => {
    const component = shallow(<Progress value={120} />)
    const slider = component.find('.k-Progress__slider')

    expect(component.props()['aria-valuenow']).toBe(100)
    expect(slider.props().style).toMatchObject({ width: '100%' })
  })
})
