import { Line } from './'
import renderer from 'react-test-renderer'
import React from 'react'

describe('<Line/>', () => {
  it('should match snapshot with default behavior', () => {
    const component = renderer
      .create(
        <Line>
          <Line.Item>Item 1</Line.Item>
          <Line.Item>Item 2</Line.Item>
          <Line.Item>Item 3</Line.Item>
        </Line>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot with props', () => {
    const component = renderer
      .create(
        <Line className="custom-class">
          <Line.Item className="custom-class">Item 1</Line.Item>
          <p>Item 2</p>
          <Line.Item>Item 3</Line.Item>
        </Line>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
