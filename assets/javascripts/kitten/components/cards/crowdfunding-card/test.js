import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { CrowdfundingCard } from './index'
import { CrowdfundingCardWidget } from './widget'

describe('<CrowdfundingCard />', () => {
  let component

  describe('CrowdfundingCard props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <CrowdfundingCard
            ownerTitle="Owner title"
            ownerDescription="Owner description"
            imageProps={{ src: '#image', alt: '' }}
            avatarProps={{ src: '#image', alt: '' }}
            state="Lorem ipsum…"
            loading={false}
            cardTitle="Lorem ipsum…"
            cardSubTitle="Sed ut perspiciatis unde omnis iste natus error Lorem"
            titleTruncate
            subTitleTruncate
            info1="Lorem ipsum…"
            info2="Lorem ipsum…"
            info3="Lorem ipsum…"
            progress={42}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('CrowdfundingCardWidget props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <CrowdfundingCardWidget
            ownerTitle="Owner title"
            ownerDescription="Owner description"
            imageProps={{ src: '#image', alt: '' }}
            avatarProps={{ src: '#image', alt: '' }}
            stateWidget="Sur"
            loading={false}
            titleWidget="Lorem ipsum…"
            subTitleWidget="Sed ut perspiciatis unde omnis iste natus error Lorem"
            titleTruncate
            subTitleTruncate
            buttonText="Lorem ipsum"
            counterDay="27days"
            stateDay=""
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
