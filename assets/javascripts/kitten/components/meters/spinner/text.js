import React from 'react'
import renderer from 'react-test-renderer'
import { Spinner } from './index'
import COLORS from '../../../constants/colors-config'

describe('<Spinner />', () => {
  let component

  describe('simple Spinner ', () => {
    beforeEach(() => {
      component = renderer.create(<Spinner />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('Spinner with multiple props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Spinner
            color={COLORS.primary1}
            value={50}
            width={50}
            height={50}
            strokeWidth={5}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
