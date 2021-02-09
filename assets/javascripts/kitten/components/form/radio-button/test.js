import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { RadioButton } from './index'

describe('<RadiButton />', () => {
  let component

  describe('default', () => {
    beforeEach(() => {
      component = renderer
      .create(
        <RadioButton
          id="test_1"
          name="test"
          error={false}
          disabled={false}
          large={false}
          largeContent={false}
          text="RadioButton Label"
          size="regular"
          variant="andromeda"
          design="disc"
        >
          Children
        </RadioButton>
      )
      .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
