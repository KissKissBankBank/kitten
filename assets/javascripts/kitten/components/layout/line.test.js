import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Line } from 'kitten/components/layout/line'

describe('<Line />', () => {
  it('renders a <div class="k-Line" />', () => {
    const component = shallow(<Line />)

    expect(component).to.have.tagName('div')
    expect(component).to.have.className('k-Line')
  })

  it('has a custom class', () => {
    const component = shallow(
      <Line className="test-Line--lorem" />
    )

    expect(component).to.have.className('test-Line--lorem')
  })

  it('renders children', () => {
    const component = shallow(
      <Line>
        <p>Lorem ipsum…</p>
      </Line>
    )

    expect(component).to.have.text('Lorem ipsum…')
  })
})

describe('<Line.Item />', () => {
  it('renders a <div class="k-Line__item" />', () => {
    const component = shallow(<Line.Item />)

    expect(component).to.have.tagName('div')
    expect(component).to.have.className('k-Line__item')
  })

  it('has a custom class', () => {
    const component = shallow(
      <Line className="test-Line__item--lorem" />
    )

    expect(component).to.have.className('test-Line__item--lorem')
  })

  it('renders children', () => {
    const component = shallow(
      <Line>
        <p>Lorem ipsum…</p>
      </Line>
    )

    expect(component).to.have.text('Lorem ipsum…')
  })
})
