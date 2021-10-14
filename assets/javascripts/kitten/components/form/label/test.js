import React from 'react'
import renderer from 'react-test-renderer'
import { Label } from '../../../components/form/label'

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
          pill={{
            width: 7,
            height: 7,
            color: '#ff7800',
          }}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
