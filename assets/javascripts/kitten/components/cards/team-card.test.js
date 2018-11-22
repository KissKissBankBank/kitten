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
          <TeamCard
            image="Custom image"
            firstName="Custom firstName"
            lastName="Custom lastName"
            jobTitle="Custom jobTitle"
            mail="Custom mail"
            phoneNumber="Custom phone number"
            socialLink="Custom social link"
            imgTitle="Custom img title"
          />,
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
