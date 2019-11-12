import React from 'react'
import renderer from 'react-test-renderer'
import { ArticleCard } from '../../components/cards/article-card'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<ArticleCard />', () => {
  let component
  let originalMatchMedia

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)

      component = renderer.create(<ArticleCard />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)

      component = renderer
        .create(
          <ArticleCard
            href="#foobar"
            imageProps={{
              src: '#image',
              alt: 'Image alt',
              backgroundColor: '#d8d8d8',
              color: '#333',
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
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with articleTitle and articleSubTitle props', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)

      component = renderer
        .create(
          <ArticleCard
            articleTitle="Custom title"
            articleSubTitle="Custom subtitle"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with ignored props', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)

      component = renderer
        .create(
          <ArticleCard
            info1="Custom information #1"
            progress={42}
            state="Custom state"
            titlesMinHeight
            titleTruncate
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
