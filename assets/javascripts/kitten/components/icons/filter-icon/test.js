import React from 'react'
import renderer from 'react-test-renderer'
import { FilterIcon } from '../../../components/icons/filter-icon'

describe('<FilterIcon />', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer.create(<FilterIcon isAnimate />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
