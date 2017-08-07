import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Progress } from 'kitten/components/meters/progress'

describe('<Progress />', () => {
  describe('by default', () => {
    const defaultComponent = shallow(<Progress />)

    it('renders <div class="k-Progress">', () => {
      expect(defaultComponent.find('.k-Progress')).to.have.length(1)
    })
  })

  it('renders a <Progress class="k-Progress" />', () => {
    const component = shallow(
      <Progress className="k-Progress--custom" />
    )
    expect(component).to.have.className('k-Progress--custom')
  })

  it('renders a value', () => {
    const component = shallow(
      <Progress value={ 42 } />
    )
    expect(component).to.have.attr('aria-valuenow', '42')

    const slider = component.find('.k-Progress__slider')
    expect(slider).to.have.style('width', '42%')
  })

  describe('with color prop', () => {
    const component = shallow(<Progress color="red" />)
    const slider = component.find('.k-Progress__slider')

    it('renders a progress bar with red color', () => {
      expect(slider).to.have.style('background-color', 'red')
    })
  })
})
