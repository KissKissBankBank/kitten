import React from 'react'
import renderer from 'react-test-renderer'
import { StatusBullet } from './index'

describe('<StatusBullet />', () => {
  let component

  it('should match its empty snapshot', () => {
    const tree = renderer
      .create(
        <StatusBullet statusMessage="Status message" statusType="success" />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
