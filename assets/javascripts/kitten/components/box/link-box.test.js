import React from 'react'
import renderer from 'react-test-renderer'
import { LinkBox } from '../../components/box/link-box'
import { ArrowIcon } from '../../components/icons/arrow-icon'
import { Text } from '../../components/typography/text'

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
          <LinkBox
            title="Lorem ipsum"
            text="In enim justo, rhoncus ut,"
            displayIcon
            href="#foobar"
            isExternal
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
