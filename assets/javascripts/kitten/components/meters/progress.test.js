import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Progress } from 'kitten/components/metters/progress'

describe('Progress', () => {
  const defaultComponent = shallow(
    <Progress />)

  it('renders <div class="k-Progress">', () => {
    expect(defaultComponent.find('.k-Progress')).to.have.length(1)
  })

  it('has a default value', () => {
    expect(defaultComponent).to.have.attr('value')
  })
})

describe('<Progress />', () => {
  const component = shallow(
  <Progress className="k-Progress--custom"
            value="50" />)

  it('renders a <Progress class="k-Progress" />', () => {
    expect(component).to.have.className('k-Progress--custom')
  })

  it('renders a value', () => {
    expect(component).to.have.attr('value')
  })
})
