import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Card } from 'kitten/components/cards/card'

describe('<Card />', () => {
  const component = shallow(<Card />)

  it('renders <div class="k-Card">', () => {
    expect(component).to.have.className('k-Card')
  })
})

describe('with custom class', () => {
  const component = shallow(
    <Card className="k-Card--custom" />
  )

  it('has a custom class', () => {
    expect(component).to.have.className('k-Card--custom')
  })
})

describe('with outline prop', () => {
  const component = shallow(
    <Card outline />
  )

  it('has an outline prop', () => {
    expect(component).to.have.className('k-Card__outline')
  })
})
