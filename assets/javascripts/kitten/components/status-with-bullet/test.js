import React from 'react'
import renderer from 'react-test-renderer'
import { StatusWithBullet } from './index'

describe('<StatusWithBullet />', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer
      .create(
        <StatusWithBullet
          statusMessage={
            <span className="k-u-sample-class">This is a text</span>
          }
          statusType="success"
          bulletProps={{ className: 'k-u-sample-class' }}
          className="k-u-sample-class"
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
