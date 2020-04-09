import React from 'react'
import renderer from 'react-test-renderer'
import { ProgressRing } from './index'
import COLORS from '../../../constants/colors-config'

describe('<ProgressRing />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ProgressRing
            color={COLORS.primary1}
            value={50}
            width={50}
            height={50}
            strokeWidth={5}
            radius={100}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
