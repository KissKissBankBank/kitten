import React from 'react'
import renderer from 'react-test-renderer'
import { Tag } from './index'

describe('<Tag />', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer.create(<Tag />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match its snapshot with props', () => {
    const tree = renderer
      .create(
        <Tag type="info">
          <strong>5</strong> kittens
        </Tag>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
