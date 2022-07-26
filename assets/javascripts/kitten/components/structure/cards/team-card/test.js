import React from 'react'
import renderer from 'react-test-renderer'
import { TeamCard } from './index'

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

  describe('with some props', () => {
    it('matches with snapshot', () => {
      window.matchMedia = createMockMediaMatcher(false)
      const component = renderer
        .create(
          <TeamCard>
            <TeamCard.Image
              src="http://via.placeholder.com/500x500/caf4fe/caf4fe"
              title="Title"
            />
            <TeamCard.Title children="Lorem Ipsum" subTitle="Consectetur" />
            <TeamCard.Icons
              email="example@kisskissbankbank.com"
              phoneNumber="06 00 00 00 00"
              links={[
                { name: 'linkedin', href: 'https://www.linkedin.com' },
                { name: 'twitter', href: 'https://www.twitter.com' },
              ]}
            />
          </TeamCard>,
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })

  describe('with socialLink prop (deprecated)', () => {
    it('matches with snapshot', () => {
      // Desactivate warnings.
      jest.spyOn(global.console, 'error').mockImplementation(() => {})

      const component = renderer
        .create(
          <TeamCard>
            <TeamCard.Icons socialLink="https://www.linkedin.com" />
          </TeamCard>,
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
