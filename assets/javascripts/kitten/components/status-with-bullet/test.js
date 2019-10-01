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
          messageAttributes={{ className: 'k-u-sample-class' }}
          bulletProps={{ className: 'k-u-sample-class' }}
          className="k-u-sample-class"
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
