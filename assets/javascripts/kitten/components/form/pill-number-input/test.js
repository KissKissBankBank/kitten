import React from 'react'
import renderer from 'react-test-renderer'
import { PillNumberInput } from './index'

describe('<PillNumberInput />', () => {
  it('should match its snapshot with props', () => {
    const tree = renderer
      .create(
        <PillNumberInput
          onChange={e => parseInt(e.target.value, 10)}
          value={5}
          min={2}
          max={42}
          step={2}
          inputProps={{
            'aria-label': 'Label !',
            className: 'CustomClass__2',
          }}
          minusButtonProps={{
            className: 'CustomClass__3',
          }}
          plusButtonProps={{
            className: 'CustomClass__4',
          }}
          className="CustomClass__1"
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
