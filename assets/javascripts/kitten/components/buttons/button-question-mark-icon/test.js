import React from 'react'
import { ButtonQuestionMarkIcon } from '../../../components/buttons/button-question-mark-icon'
import renderer from 'react-test-renderer'

describe('ButtonQuestionMarkIcon />', () => {
  it('default snapshot', () => {
    const tree = renderer.create(<ButtonQuestionMarkIcon />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
