import React from 'react'
import renderer from 'react-test-renderer'
import { IconBadge } from './index'
import { pxToRem } from '../../../helpers/utils/typography'


describe('<IconBadge />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(<IconBadge children="Custom children" valid size="big" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with border style', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <IconBadge 
            children="Custom children"
            size="big"
            borderColor="#222"
            borderRadius={30}
            borderStyle="solid"
            borderWidth={2}
          />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
