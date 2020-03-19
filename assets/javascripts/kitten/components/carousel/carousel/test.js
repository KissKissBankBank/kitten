import React from 'react'
import renderer from 'react-test-renderer'
import {
  Carousel,
  getNumColumnsForWidth,
  getNumPagesForColumnsAndDataLength,
  checkPage,
} from './carousel'
import {
  ProjectCard,
  MIN_WIDTH as ProjectCardMinWidth,
  MARGIN_BETWEEN as ProjectCardMarginBetween,
} from '../../../components/cards/project-card'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<Carousel />', () => {
  let originalMatchMedia
  const data = [{ title: 'A' }]

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
          itemMinWidth={ProjectCardMinWidth}
          baseItemMarginBetween={ProjectCardMarginBetween}
        >
          {data.map((item, index) => (
            <ProjectCard title={item.title} key={index} />
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
          itemMinWidth={ProjectCardMinWidth}
          baseItemMarginBetween={ProjectCardMarginBetween}
          pagesClassName="custom-class"
          hidePagination
        >
          {data.map((item, index) => (
            <ProjectCard title={item.title} key={index} />
          ))}
        </Carousel>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('getNumColumnsForWidth', () => {
    it('5 columns', () => {
      expect(getNumColumnsForWidth(1000, 150, 50)).toBe(5)
    })

    it('1 column', () => {
      expect(getNumColumnsForWidth(300, 150, 20)).toBe(1)
    })

    it('0 column if no width', () => {
      expect(getNumColumnsForWidth(0, 100, 10)).toBe(0)
    })

    it('0 column if no itemWidth', () => {
      expect(getNumColumnsForWidth(800, 0, 0)).toBe(0)
    })

    it('NaN if not number', () => {
      expect(getNumColumnsForWidth('0', '0', '0')).toBeNaN()
    })
  })

  describe('getNumPagesForColumnsAndDataLength', () => {
    it('3 pages', () => {
      expect(getNumPagesForColumnsAndDataLength(7, 3)).toBe(3)
    })

    it('1 page', () => {
      expect(getNumPagesForColumnsAndDataLength(2, 2)).toBe(1)
    })

    it('0 page if no dataLength', () => {
      expect(getNumPagesForColumnsAndDataLength(0, 3)).toBe(0)
    })

    it('0 page if no numColumns', () => {
      expect(getNumPagesForColumnsAndDataLength(5, 0)).toBe(0)
    })

    it('NaN if not number', () => {
      expect(getNumPagesForColumnsAndDataLength('0', '0')).toBeNaN()
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
})
