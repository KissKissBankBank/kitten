import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { DeskMenu } from './index'

describe('<DeskMenu />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <DeskMenu>
            <DeskMenu.List>
              <DeskMenu.Item as="button" type="button" onClick={() => {}}>
                First item
              </DeskMenu.Item>
              <DeskMenu.Item href="#" isActive>
                Second item
              </DeskMenu.Item>
              <DeskMenu.Item href="#hello" linkStyle>
                Third item (link)
              </DeskMenu.Item>
            </DeskMenu.List>
          </DeskMenu>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with header', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <DeskMenu>
            <DeskMenu.Header imageProps={{ alt: 'Alt', src: '/kitten.jpg' }}>
              Hello world
            </DeskMenu.Header>
            <DeskMenu.List>
              <DeskMenu.Item href="#">First item</DeskMenu.Item>
              <DeskMenu.Item href="#" isActive>
                Second item
              </DeskMenu.Item>
            </DeskMenu.List>
          </DeskMenu>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
