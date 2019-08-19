import React from 'react'
import renderer from 'react-test-renderer'
import { StatusWithBullet } from './index'

describe('<StatusWithBullet />', () => {
  let component

  it('should match its empty snapshot', () => {
    const tree = renderer
      .create(
        <StatusWithBullet
          statusMessage="Status message"
          statusType="success"
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
