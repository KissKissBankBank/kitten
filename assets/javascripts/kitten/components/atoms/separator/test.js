import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Separator } from './'

describe('<Separator />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<Separator />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with darker prop', () => {
    beforeEach(() => {
      component = renderer.create(<Separator darker />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with className prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<Separator className="custom__class" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with other prop', () => {
    beforeEach(() => {
      component = renderer.create(<Separator aria-hidden="true" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
