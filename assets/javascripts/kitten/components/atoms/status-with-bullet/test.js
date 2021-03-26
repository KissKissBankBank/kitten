import React from 'react'
import renderer from 'react-test-renderer'
import { StatusWithBullet } from './index'

describe('<StatusWithBullet />', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer
      .create(
        <StatusWithBullet
          statusMessage="This is a text"
          statusType="success"
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match its snapshot with children', () => {
    const tree = renderer
      .create(
        <StatusWithBullet statusType="danger">Sample message</StatusWithBullet>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match its snapshot with many props', () => {
    const tree = renderer
      .create(
        <StatusWithBullet
          statusMessage={
            <span className="k-u-sample-class">Sample message</span>
          }
          statusType="none"
          bulletProps={{ className: 'k-u-sample-class' }}
          className="k-u-sample-class"
          size="micro"
          weight="light"
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
