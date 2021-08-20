import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { DropdownMenu } from './index'

describe('<DropdownMenu />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <DropdownMenu button={() => <span>Open me!</span>}>
            <DropdownMenu.Link>Content</DropdownMenu.Link>
            <DropdownMenu.Separator />
            <DropdownMenu.Button>Content</DropdownMenu.Button>
          </DropdownMenu>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
