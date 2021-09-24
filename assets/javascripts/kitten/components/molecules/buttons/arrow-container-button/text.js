import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ArrowContainerButton } from './index'

describe('<ArrowContainerButton />', () => {
  let component

  describe('basic', () => {
    beforeEach(() => {
      component = renderer
        .create(<ArrowContainerButton>MyArrowContainerButton</ArrowContainerButton>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
