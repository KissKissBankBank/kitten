import React from 'react'
import renderer from 'react-test-renderer'
import { LinkBox } from './index'
import { FlashCircleIcon } from '../../icons/flash-circle-icon'

describe('<LinkBox />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<LinkBox />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <LinkBox href="#foobar" isExternal>
            <LinkBox.Icon>
              <FlashCircleIcon />
            </LinkBox.Icon>

            <LinkBox.Text>foobar</LinkBox.Text>
          </LinkBox>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
