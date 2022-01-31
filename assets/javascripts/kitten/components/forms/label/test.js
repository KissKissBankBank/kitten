import React from 'react'
import renderer from 'react-test-renderer'
import { Label } from '../../forms/label'

describe('<Label />', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer.create(<Label />).toJSON()

    expect(tree).toMatchSnapshot()
  })
  it('should match its propped snapshot', () => {
    const tree = renderer
      .create(
        <Label
          size="tiny"
          children="Custom form label"
          focusId="customId"
          withoutPointerEvents
          tag="span"
          dot={{
            width: 7,
            height: 7,
            backgroundColor: '#ff7800',
            title: 'champs obligatoire',
          }}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
