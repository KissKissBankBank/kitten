import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ButtonGroup } from './index'

describe('<ButtonGroup />', () => {
  let component

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ButtonGroup>
            <ButtonGroup.Button>Button1</ButtonGroup.Button>
            <ButtonGroup.Button active>Button2</ButtonGroup.Button>
            <ButtonGroup.Button>Button3</ButtonGroup.Button>
          </ButtonGroup>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with variant prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ButtonGroup>
            <ButtonGroup.Button>Button1</ButtonGroup.Button>
            <ButtonGroup.Button active>Button2</ButtonGroup.Button>
            <ButtonGroup.Button>Button3</ButtonGroup.Button>
          </ButtonGroup>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
