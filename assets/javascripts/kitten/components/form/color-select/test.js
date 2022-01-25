import React from 'react'
import renderer from 'react-test-renderer'
import { ColorSelect } from './index'

describe('<ColorSelect />', () => {
  it('should match its snapshot with props', () => {
    const tree = renderer
      .create(
        <ColorSelect
          name="test-slider-input"
          onChange={() => {}}
          value="#556954"
          contrastColor="#555"
          contrastRatio={3}
          inputProps={{ 'aria-label': 'Code hexadécimal de la couleur' }}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
