import React from 'react'
import renderer from 'react-test-renderer'
import { TextareaAutoResize } from './index'

describe('<TextareaAutoResize />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer.create(<TextareaAutoResize />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
