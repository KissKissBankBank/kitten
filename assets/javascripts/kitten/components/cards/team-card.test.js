import React from 'react'
import renderer from 'react-test-renderer'
import { TeamCard } from 'kitten/components/cards/team-card'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<TeamCard />', () => {
  let originalMatchMedia

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default', () => {
    it('matches with snapshot', () => {
      window.matchMedia = createMockMediaMatcher(false)
      const component = renderer.create(<TeamCard />).toJSON()
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    it('matches with snapshot', () => {
      window.matchMedia = createMockMediaMatcher(false)
      const component = renderer
        .create(
          <TeamCard>
            <TeamCard.Image
              image="http://via.placeholder.com/500x500/caf4fe/caf4fe"
              imageTitle="Title"
            />
            <TeamCard.Title
              firstName="Lorem"
              lastName="Ipsum"
              jobTitle="Consectetur"
            />
            <TeamCard.Icons
              mail="example@kisskissbankbank.com"
              phoneNumber="06 00 00 00 00"
              socialLink="https://www.linkedin.com"
            />
          </TeamCard>,
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
