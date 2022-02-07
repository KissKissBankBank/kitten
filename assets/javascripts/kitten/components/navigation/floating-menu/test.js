import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { FloatingMenu } from './index'

describe('<FloatingMenu />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FloatingMenu>
            <FloatingMenu.Item as="button" type="button" onClick={() => {}}>
              First item
            </FloatingMenu.Item>
            <FloatingMenu.Item href="#" isActive>
              Second item
            </FloatingMenu.Item>
            <FloatingMenu.Item href="#hello" linkStyle>
              Third item (link)
            </FloatingMenu.Item>
          </FloatingMenu>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
