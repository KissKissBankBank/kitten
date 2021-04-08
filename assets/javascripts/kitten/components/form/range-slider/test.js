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
})
