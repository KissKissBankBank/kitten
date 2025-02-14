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
            <DropdownMenu.Link textProps={{ className: 'custom-class' }}>
              Content
            </DropdownMenu.Link>
            <DropdownMenu.Separator />
            <DropdownMenu.Button
              textProps={{ className: 'custom-class' }}
              icon={<svg />}
            >
              Content
            </DropdownMenu.Button>
          </DropdownMenu>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with positioned button', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <DropdownMenu
            positionedButton
            menuPosition="right"
            button={() => <span>Open me!</span>}
          >
            <DropdownMenu.Link icon={<svg />}>Content</DropdownMenu.Link>
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
