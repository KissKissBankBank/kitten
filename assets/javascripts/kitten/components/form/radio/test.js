import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Radio } from './index'

describe('<Radio />', () => {
  let component

  describe('default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Radio
            id="test_1"
            name="test"
            error={false}
            disabled={false}
            text="Radio Label"
            design="disc"
            fontWeight="normal"
          >
            Children
          </Radio>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
