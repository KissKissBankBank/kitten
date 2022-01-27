import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { TextButton } from './index'
import { VisaIcon } from '../../../..'

describe('<TextButton />', () => {
  let component

  describe('with text', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextButton>
            <VisaIcon /> MyButton
          </TextButton>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
