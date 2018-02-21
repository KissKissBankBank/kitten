import React from 'react'
import renderer from 'react-test-renderer'
import { CrowdfundingCard } from 'kitten/components/cards/crowdfunding-card'

describe('<CrowdfundingCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(
        <CrowdfundingCard />
      ).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with loading prop', () => {
    beforeEach(() => {
      component = renderer.create(
        <CrowdfundingCard loading />
      ).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer.create(
        <CrowdfundingCard
          href="#foobar"
          imageProps={{
            src: '#image',
            alt: 'Image alt',
          }}
          avatarProps={{
            src: '#avatar',
            alt: 'Avatar alt',
          }}
          ownerTitle="Custom title"
          ownerDescription="Custom description"
          titleProps={{
            tag: 'h4',
          }}
          cardTitle="Custom title"
          cardSubTitle="Custom subtitle"
          titlesMinHeight
          info1="Custom information #1"
          info2="Custom information #2"
          info3="Custom information #3"
          progress="84"
          state="Custom state"
        />
      ).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
