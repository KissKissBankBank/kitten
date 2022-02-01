import React from 'react'
import renderer from 'react-test-renderer'
import { RangeSlider } from './index'

describe('<RangeSlider />', () => {
  it('should match its snapshot with props', () => {
    const tree = renderer
      .create(
        <RangeSlider
          name="test-slider-input"
          onChange={e => parseInt(e.target.value, 10)}
          initialValue={5}
          min={2}
          max={42}
          step={2}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
  it('should match its disabled snapshot with disabled props', () => {
    const tree = renderer
      .create(
        <RangeSlider
          disabled
          name="test-slider-input"
          onChange={e => parseInt(e.target.value, 10)}
          initialValue={5}
          min={2}
          max={42}
          step={2}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should set unbounded values when contolled with value', () => {
    const tree = renderer
      .create(
        <RangeSlider
          name="test-slider-input"
          value={20}
          min={1}
          max={10}
          step={1}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
