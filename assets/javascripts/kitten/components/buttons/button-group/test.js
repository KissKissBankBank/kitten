import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ButtonGroup } from './button-group'

describe('<ButtonGroup />', () => {
  let component

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(<ButtonGroup buttons={[{ key: 1, name: 'Button1' }]} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
