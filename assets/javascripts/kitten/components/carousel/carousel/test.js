import React from 'react'
import renderer from 'react-test-renderer'
import {
  Carousel,
  getNumberOfItemsPerPageForWidth,
  getNumberOfPagesForColumnsAndDataLength,
  checkPage,
  checkPageLoop,
} from './index'
import { CrowdfundingCard } from '../../../components/cards/crowdfunding-card'

const projectCardMinWidth = 280
const projectCardMarginBetween = 40

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<Carousel />', () => {
  let originalMatchMedia
  const data = [
    {
      href: 'https://kitten.kisskissbankbank.com/',
      ownerTitle: 'A Owner title',
      ownerDescription: 'A Owner description',
      imageProps: { src: '#image', alt: '' },
      avatarProps: { src: '#image', alt: '' },
      state: 'Lorem ipsum…',
      loading: false,
      title: 'A Lorem ipsum…',
      subTitle: 'A Sed ut perspiciatis unde omnis iste natus error Lorem',
      titleTruncate: true,
      subTitleTruncate: true,
      info1: 'Lorem ipsum…',
      info2: 'Lorem ipsum…',
      info3: 'Lorem ipsum…',
      progress: 100,
      stretch: true,
    },
    {
      href: 'https://kitten.kisskissbankbank.com/',
      ownerTitle: 'B Owner title',
      ownerDescription: 'B Owner description',
      imageProps: { src: '#image', alt: '' },
      avatarProps: { src: '#image', alt: '' },
      state: 'Lorem ipsum…',
      loading: false,
      title: 'B Lorem ipsum…',
      subTitle: 'B Sed ut perspiciatis unde omnis iste natus error Lorem',
      titleTruncate: true,
      subTitleTruncate: true,
      info1: 'Lorem ipsum…',
      info2: 'Lorem ipsum…',
      info3: 'Lorem ipsum…',
      progress: 42,
      stretch: true,
    },
  ]

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default on desktop', () => {
    window.matchMedia = createMockMediaMatcher(false) // desktop
    const carousel = renderer
      .create(
        <Carousel
          itemMinWidth={projectCardMinWidth}
          baseItemMarginBetween={projectCardMarginBetween}
          tinyButtons={false}
        >
          {data.map((item, index) => (
            <CrowdfundingCard {...item} key={index} />
          ))}
        </Carousel>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('with loop prop on desktop', () => {
    window.matchMedia = createMockMediaMatcher(false) // desktop
    const carousel = renderer
      .create(
        <Carousel
          itemMinWidth={projectCardMinWidth}
          baseItemMarginBetween={projectCardMarginBetween}
          loop={true}
        >
          {data.map((item, index) => (
            <CrowdfundingCard {...item} key={index} />
          ))}
        </Carousel>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('with exportVisibilityProps prop', () => {
    window.matchMedia = createMockMediaMatcher(false) // desktop
    const carousel = renderer
      .create(
        <Carousel
          itemMinWidth={projectCardMinWidth}
          baseItemMarginBetween={projectCardMarginBetween}
          exportVisibilityProps
        >
          {data.map((item, index) => (
            <CrowdfundingCard {...item} key={index} />
          ))}
        </Carousel>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('with itemsPerPage prop', () => {
    window.matchMedia = createMockMediaMatcher(false) // desktop
    const carousel = renderer
      .create(
        <Carousel
          itemMinWidth={projectCardMinWidth}
          baseItemMarginBetween={projectCardMarginBetween}
          itemsPerPage={5}
        >
          {data.map((item, index) => (
            <CrowdfundingCard {...item} key={index} />
          ))}
        </Carousel>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('by default on mobile', () => {
    window.matchMedia = createMockMediaMatcher(true) // mobile
    const carousel = renderer
      .create(
        <Carousel
          itemMinWidth={projectCardMinWidth}
          baseItemMarginBetween={projectCardMarginBetween}
          pagesClassName="custom-class"
        >
          {data.map((item, index) => (
            <CrowdfundingCard {...item} key={index} />
          ))}
        </Carousel>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('legacy carousel on desktop', () => {
    window.matchMedia = createMockMediaMatcher(false) // desktop

    // Desactivate warnings.
    jest.spyOn(global.console, 'error').mockImplementation(() => {})

    const carousel = renderer
      .create(
        <Carousel
          itemMinWidth={projectCardMinWidth}
          baseItemMarginBetween={projectCardMarginBetween}
          data={[{ title: 'A' }]}
          renderItem={({ item }) => {
            return <CrowdfundingCard {...item} />
          }}
        />,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('legacy carousel on desktop with withoutLeftOffset={true}', () => {
    window.matchMedia = createMockMediaMatcher(false) // desktop

    // Desactivate warnings.
    jest.spyOn(global.console, 'error').mockImplementation(() => {})

    const carousel = renderer
      .create(
        <Carousel
          itemMinWidth={projectCardMinWidth}
          baseItemMarginBetween={projectCardMarginBetween}
          data={[{ title: 'A' }]}
          withoutLeftOffset={true}
          renderItem={({ item }) => {
            return <CrowdfundingCard {...item} />
          }}
        />,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('legacy carousel on mobile', () => {
    window.matchMedia = createMockMediaMatcher(true) // mobile

    // Desactivate warnings.
    jest.spyOn(global.console, 'error').mockImplementation(() => {})

    const carousel = renderer
      .create(
        <Carousel
          itemMinWidth={projectCardMinWidth}
          baseItemMarginBetween={projectCardMarginBetween}
          data={[{ title: 'A' }]}
          renderItem={({ item }) => {
            return <CrowdfundingCard {...item} />
          }}
        />,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('empty carousel', () => {
    window.matchMedia = createMockMediaMatcher(true) // mobile
    const carousel = renderer
      .create(
        <Carousel
          itemMinWidth={projectCardMinWidth}
          baseItemMarginBetween={projectCardMarginBetween}
        />,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('getNumberOfItemsPerPageForWidth', () => {
    it('5 columns', () => {
      expect(getNumberOfItemsPerPageForWidth(1000, 150, 50)).toBe(5)
    })

    it('1 column', () => {
      expect(getNumberOfItemsPerPageForWidth(300, 150, 20)).toBe(1)
    })

    it('0 column if no width', () => {
      expect(getNumberOfItemsPerPageForWidth(0, 100, 10)).toBe(0)
    })

    it('0 column if no itemWidth', () => {
      expect(getNumberOfItemsPerPageForWidth(800, 0, 0)).toBe(0)
    })

    it('NaN if not number', () => {
      expect(getNumberOfItemsPerPageForWidth('0', '0', '0')).toBeNaN()
    })

    it('2 columns if no itemWidth but 2 itemsPerPage', () => {
      expect(getNumberOfItemsPerPageForWidth(800, 0, 0, 2)).toBe(2)
    })
  })

  describe('getNumberOfPagesForColumnsAndDataLength', () => {
    it('3 pages', () => {
      expect(getNumberOfPagesForColumnsAndDataLength(7, 3)).toBe(3)
    })

    it('1 page', () => {
      expect(getNumberOfPagesForColumnsAndDataLength(2, 2)).toBe(1)
    })

    it('0 page if no dataLength', () => {
      expect(getNumberOfPagesForColumnsAndDataLength(0, 3)).toBe(0)
    })

    it('0 page if no numberOfItemsPerPage', () => {
      expect(getNumberOfPagesForColumnsAndDataLength(5, 0)).toBe(0)
    })

    it('NaN if not number', () => {
      expect(getNumberOfPagesForColumnsAndDataLength('0', '0')).toBeNaN()
    })
  })

  describe('checkPage', () => {
    it('to page number 2', () => {
      expect(checkPage(4, 2)).toBe(2)
    })

    it('to page number 3', () => {
      expect(checkPage(4, 3)).toBe(3)
    })

    it('stay page number 3', () => {
      expect(checkPage(4, 4)).toBe(3)
    })

    it('to page number 1', () => {
      expect(checkPage(4, 1)).toBe(1)
    })

    it('to page number 0', () => {
      expect(checkPage(4, 0)).toBe(0)
    })

    it('stay page number 0 if newPage negative', () => {
      expect(checkPage(4, -1)).toBe(0)
    })

    it('stay page number 0 if no numPages', () => {
      expect(checkPage(0, 3)).toBe(0)
    })

    it('stay page 0 if not number', () => {
      expect(checkPage('0', '0')).toBe(0)
    })
  })

  describe('checkPageLoop', () => {
    it('to page number 2', () => {
      expect(checkPageLoop(4, 2)).toBe(2)
    })

    it('to page number 3', () => {
      expect(checkPageLoop(4, 3)).toBe(3)
    })

    it('go to first page', () => {
      expect(checkPageLoop(4, 4)).toBe(0)
    })

    it('to page number 1', () => {
      expect(checkPageLoop(4, 1)).toBe(1)
    })

    it('to page number 0', () => {
      expect(checkPageLoop(4, 0)).toBe(0)
    })

    it('go to last if newPage negative', () => {
      expect(checkPageLoop(4, -1)).toBe(3)
    })

    it('stay page number 0 if no numPages', () => {
      expect(checkPageLoop(0, 3)).toBe(0)
    })

    it('stay page 0 if not number', () => {
      expect(checkPageLoop('0', '0')).toBe(0)
    })
  })
})
