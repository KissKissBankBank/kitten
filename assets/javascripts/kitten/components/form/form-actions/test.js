import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { FormActions } from './index'

describe('<FormActions />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FormActions>
            <FormActions.Item>Item 1</FormActions.Item>
            <FormActions.Item>Item 2</FormActions.Item>
          </FormActions>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with custom props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FormActions id="custom-id" className="custom-class-name">
            <FormActions.Item className="custom-item-class-name">
              Item 1
            </FormActions.Item>
            <FormActions.Item className="custom-item-class-name">
              Item 2
            </FormActions.Item>
          </FormActions>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
