import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Progress } from './index'
import COLORS from '../../../constants/colors-config'

describe('<Progress />', () => {
  let component

  describe('simple Progress ', () => {
    beforeEach(() => {
      component = renderer.create(<Progress />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('Progress with multiple props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Progress
            color={COLORS.primary1}
            value={50}
            rampProps={{ style: { height: 6 } }}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
