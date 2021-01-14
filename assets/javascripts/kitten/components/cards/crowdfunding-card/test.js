import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { CrowdfundingCard } from './index'
import { CrowdfundingCardWidget } from './widget'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<CrowdfundingCard />', () => {
  let originalMatchMedia
  let component

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('CrowdfundingCard props', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)

      component = renderer
        .create(
          <CrowdfundingCard
            ownerTitle="Owner title"
            ownerDescription="Owner description"
            imageProps={{ src: '#image', alt: '' }}
            avatarProps={{ src: '#image', alt: '' }}
            state="Lorem ipsum…"
            loading={false}
            title="Lorem ipsum…"
            subTitle="Sed ut perspiciatis unde omnis iste natus error Lorem"
            titleTruncate
            subTitleTruncate
            info1="Lorem ipsum…"
            info2="Lorem ipsum…"
            info3="Lorem ipsum…"
            progress={42}
            stretch={true}
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
      window.matchMedia = createMockMediaMatcher(false)

      component = renderer
        .create(
          <CrowdfundingCardWidget
            ownerTitle="Owner title"
            ownerDescription="Owner description"
            imageProps={{ src: '#image', alt: '' }}
            avatarProps={{ src: '#image', alt: '' }}
            state="Sur"
            loading={false}
            title="Lorem ipsum…"
            subtitle="Sed ut perspiciatis unde omnis iste natus error Lorem"
            titleTruncate
            subTitleTruncate
            buttonText="Lorem ipsum"
            dayCounter={null}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('CrowdfundingCard with video props', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)

      component = renderer
        .create(
          <CrowdfundingCard
            ownerTitle="Owner title"
            ownerDescription="Owner description"
            imageProps={{ src: '#image', alt: '' }}
            avatarProps={{ src: '#image', alt: '' }}
            videoProps={{
              className: 'testClass',
              loop: false,
              muted: false,
            }}
            videoSources={[
              { src: '#videoFile.mp4', type: 'video/mp4' },
              { src: '#videoFile.webm', type: 'video/webm' },
            ]}
            state="Sur"
            loading={false}
            title="Lorem ipsum…"
            subtitle="Sed ut perspiciatis unde omnis iste natus error Lorem"
            titleTruncate
            subTitleTruncate
            buttonText="Lorem ipsum"
            dayCounter={null}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('CrowdfundingCard with buttonText prop', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)

      component = renderer
        .create(
          <CrowdfundingCardWidget
            ownerTitle="Owner title"
            ownerDescription="Owner description"
            imageProps={{ src: '#image', alt: '' }}
            avatarProps={{ src: '#image', alt: '' }}
            state="Sur"
            loading={false}
            title="Lorem ipsum…"
            subtitle="Sed ut perspiciatis unde omnis iste natus error Lorem"
            titleTruncate
            subTitleTruncate
            buttonText="Lorem ipsum"
            dayCounter={null}
            buttonText="Contribute"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('CrowdfundingCard with forceVersion prop', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)

      component = renderer
        .create(
          <CrowdfundingCardWidget
            ownerTitle="Owner title"
            ownerDescription="Owner description"
            imageProps={{ src: '#image', alt: '' }}
            avatarProps={{ src: '#image', alt: '' }}
            state="Sur"
            loading={false}
            title="Lorem ipsum…"
            subtitle="Sed ut perspiciatis unde omnis iste natus error Lorem"
            titleTruncate
            subTitleTruncate
            buttonText="Lorem ipsum"
            dayCounter={null}
            buttonText="Contribute"
            forceVersion="desktop"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
