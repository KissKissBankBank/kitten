import React from 'react'
import { ButtonQuestionMarkIcon } from './index'
import renderer from 'react-test-renderer'

describe('ButtonQuestionMarkIcon />', () => {
  it('default snapshot', () => {
    const tree = renderer.create(<ButtonQuestionMarkIcon />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
