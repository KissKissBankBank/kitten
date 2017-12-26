import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Carousel, {
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

    it('is a <Grid />', () => {
      expect(carousel.dive()).to.have.className('k-Grid')
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

    it('is a <Grid />', () => {
      expect(carousel.dive()).to.have.className('k-Grid')
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

    it('is not a <Grid />', () => {
      expect(carousel).to.not.have.className('k-Grid')
    })

  })

  describe('getNumColumnsForWidth', () => {
    it('5 columns', () => {
      expect( getNumColumnsForWidth(1000, 150, 50) ).to.equal(5)
    })

    it('1 column', () => {
      expect( getNumColumnsForWidth(300, 150, 20) ).to.equal(1)
    })

    it('0 column if no width', () => {
      expect( getNumColumnsForWidth(0, 100, 10) ).to.equal(0)
    })

    it('0 column if no itemWidth', () => {
      expect( getNumColumnsForWidth(800, 0, 0) ).to.equal(0)
    })

    it('NaN if not number', () => {
      expect( getNumColumnsForWidth('0', '0', '0') ).to.be.NaN
    })
  })

  describe('getNumPagesForColumnsAndDataLength', () => {
    it('3 pages', () => {
      expect( getNumPagesForColumnsAndDataLength(7, 3) ).to.equal(3)
    })

    it('1 page', () => {
      expect( getNumPagesForColumnsAndDataLength(2, 2) ).to.equal(1)
    })

    it('0 page if no dataLength', () => {
      expect( getNumPagesForColumnsAndDataLength(0, 3) ).to.equal(0)
    })

    it('0 page if no numColumns', () => {
      expect( getNumPagesForColumnsAndDataLength(5, 0) ).to.equal(0)
    })

    it('NaN if not number', () => {
      expect( getNumPagesForColumnsAndDataLength('0', '0') ).to.be.NaN
    })
  })

  describe('checkPage', () => {
    it('to page number 2', () => {
      expect( checkPage(4, 2) ).to.equal(2)
    })

    it('to page number 3', () => {
      expect( checkPage(4, 3) ).to.equal(3)
    })

    it('stay page number 3', () => {
      expect( checkPage(4, 4) ).to.equal(3)
    })

    it('to page number 1', () => {
      expect( checkPage(4, 1) ).to.equal(1)
    })

    it('to page number 0', () => {
      expect( checkPage(4, 0) ).to.equal(0)
    })

    it('stay page number 0 if newPage negative', () => {
      expect( checkPage(4, -1) ).to.equal(0)
    })

    it('stay page number 0 if no numPages', () => {
      expect( checkPage(0, 3) ).to.equal(0)
    })

    it('stay page 0 if not number', () => {
      expect( checkPage('0', '0') ).to.equal(0)
    })
  })
})
