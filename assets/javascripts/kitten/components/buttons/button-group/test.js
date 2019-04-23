import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ButtonGroup } from './button-group'

describe('<ButtonGroup />', () => {
  let component

  beforeEach(() => {
    component = renderer.create(<ButtonGroup>MyButton</ButtonGroup>).toJSON()
  })

  it('matches with snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
