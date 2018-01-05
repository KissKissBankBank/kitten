import React from 'react'


import {
  Carousel,
  getNumColumnsForWidth,
  getNumPagesForColumnsAndDataLength,
  checkPage,
} from 'kitten/components/carousel/carousel'
import {
  ProjectCard,
  MIN_WIDTH as ProjectCardMinWidth,
  MARGIN_BETWEEN as ProjectCardMarginBetween,
} from 'kitten/components/cards/project-card'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {}
})

describe('<Carousel />', () => {
  let originalMatchMedia

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default on desktop', () => {
    window.matchMedia = createMockMediaMatcher(false) // desktop
    const carousel = shallow(
      <Carousel
        data={[{title: 'A'}]}
        itemMinWidth={ProjectCardMinWidth}
        baseItemMarginBetween={ProjectCardMarginBetween}
        renderItem={({item}) => {
          return (
            <ProjectCard
              title={item.title}
            />
          )
        }}
      />,
      {}
    )

    test('is a <Grid />', () => {
      expect(carousel.dive().hasClass('k-Grid')).to.equal(true)
    })
  })

  describe('with withoutLeftOffset on desktop', () => {
    window.matchMedia = createMockMediaMatcher(false) // desktop
    const carousel = shallow(
      <Carousel
        data={[{title: 'A'}]}
        itemMinWidth={ProjectCardMinWidth}
        baseItemMarginBetween={ProjectCardMarginBetween}
        withoutLeftOffset={true}
        renderItem={({item}) => {
          return (
            <ProjectCard
              title={item.title}
            />
          )
        }}
      />,
      {}
    )

    test('is a <Grid />', () => {
      expect(carousel.dive().hasClass('k-Grid')).to.equal(true)
    })
  })

  describe('by default on mobile', () => {
    window.matchMedia = createMockMediaMatcher(true) // mobile
    const carousel = shallow(
      <Carousel
        data={[{title: 'A'}]}
        itemMinWidth={ProjectCardMinWidth}
        baseItemMarginBetween={ProjectCardMarginBetween}
        renderItem={({item}) => {
          return (
            <ProjectCard
              title={item.title}
            />
          )
        }}
      />,
      {}
    )

    test('is not a <Grid />', () => {
      expect(carousel).to.not.have.className('k-Grid')
    })

  })

  describe('getNumColumnsForWidth', () => {
    test('5 columns', () => {
      expect( getNumColumnsForWidth(1000, 150, 50) ).toBe(5)
    })

    test('1 column', () => {
      expect( getNumColumnsForWidth(300, 150, 20) ).toBe(1)
    })

    test('0 column if no width', () => {
      expect( getNumColumnsForWidth(0, 100, 10) ).toBe(0)
    })

    test('0 column if no itemWidth', () => {
      expect( getNumColumnsForWidth(800, 0, 0) ).toBe(0)
    })

    test('NaN if not number', () => {
      expect( getNumColumnsForWidth('0', '0', '0') ).toBeNaN()
    })
  })

  describe('getNumPagesForColumnsAndDataLength', () => {
    test('3 pages', () => {
      expect( getNumPagesForColumnsAndDataLength(7, 3) ).toBe(3)
    })

    test('1 page', () => {
      expect( getNumPagesForColumnsAndDataLength(2, 2) ).toBe(1)
    })

    test('0 page if no dataLength', () => {
      expect( getNumPagesForColumnsAndDataLength(0, 3) ).toBe(0)
    })

    test('0 page if no numColumns', () => {
      expect( getNumPagesForColumnsAndDataLength(5, 0) ).toBe(0)
    })

    test('NaN if not number', () => {
      expect( getNumPagesForColumnsAndDataLength('0', '0') ).toBeNaN()
    })
  })

  describe('checkPage', () => {
    test('to page number 2', () => {
      expect( checkPage(4, 2) ).toBe(2)
    })

    test('to page number 3', () => {
      expect( checkPage(4, 3) ).toBe(3)
    })

    test('stay page number 3', () => {
      expect( checkPage(4, 4) ).toBe(3)
    })

    test('to page number 1', () => {
      expect( checkPage(4, 1) ).toBe(1)
    })

    test('to page number 0', () => {
      expect( checkPage(4, 0) ).toBe(0)
    })

    test('stay page number 0 if newPage negative', () => {
      expect( checkPage(4, -1) ).toBe(0)
    })

    test('stay page number 0 if no numPages', () => {
      expect( checkPage(0, 3) ).toBe(0)
    })

    test('stay page 0 if not number', () => {
      expect( checkPage('0', '0') ).toBe(0)
    })
  })
})
