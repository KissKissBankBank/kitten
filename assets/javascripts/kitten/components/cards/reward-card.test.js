import React from 'react'
import renderer from 'react-test-renderer'
import { RewardCard } from '../../components/cards/reward-card'
import { Paragraph } from '../../components/typography/paragraph'
import { List } from '../../components/lists/list'
import { Text } from '../../components/typography/text'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<RewardCard />', () => {
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
      const component = renderer
        .create(
          <RewardCard>
            <RewardCard.Row>
              <RewardCard.RowContent>
                <RewardCard.Title>Custom title mount</RewardCard.Title>

                <Paragraph modifier="quaternary" margin={false}>
                  Custom text description
                </Paragraph>
              </RewardCard.RowContent>
            </RewardCard.Row>
          </RewardCard>,
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })

  describe('with all props', () => {
    it('matches with snapshot', () => {
      window.matchMedia = createMockMediaMatcher(false)
      const component = renderer
        .create(
          <RewardCard>
            <RewardCard.Row>
              <RewardCard.RowContent>
                <RewardCard.StarredBadge>
                  <Text size="nano" color="font1" weight="bold">
                    Starred label
                  </Text>
                  <Text size="nano" color="font1">
                    Lorem ipsum
                  </Text>
                </RewardCard.StarredBadge>

                <RewardCard.Title>100$</RewardCard.Title>

                <Text color="font1" tag="p" weight="bold">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </Text>

                <Paragraph modifier="quaternary" margin={false}>
                  Superatis Tauri montis verticibus qui ad solis ortum sublimius
                  attolluntur, Cilicia spatiis porrigitur late distentis dives
                  bonis omnibus terra, eiusque lateri dextro adnexa Isauria,
                  pari sorte uberi palmite viget et frugibus minutis, quam
                  mediam navigabile flumen Calycadnus interscindit.
                </Paragraph>

                <List>
                  <RewardCard.Info
                    key="Contributors"
                    label="Contributors:"
                    value="35"
                  />
                  <RewardCard.Info
                    key="Availability"
                    label="Availability:"
                    value="42/1000"
                  />
                  <RewardCard.Info
                    key="Delivery"
                    label="Delivery:"
                    value="January 2019"
                    withMarginBottom={false}
                  />
                </List>
              </RewardCard.RowContent>

              <RewardCard.RowSide>
                <RewardCard.Image
                  src="http://via.placeholder.com/200x240/caf4fe/caf4fe"
                  alt="My reward"
                />
              </RewardCard.RowSide>
            </RewardCard.Row>

            <RewardCard.CheckedSection>
              <Text color="font1" size="tiny" tag="p">
                You contributed to this project.
              </Text>
              <Text
                decoration="none"
                color="primary1"
                size="tiny"
                weight="regular"
                tag="a"
                href="#"
              >
                Manage my contribution
              </Text>
            </RewardCard.CheckedSection>
          </RewardCard>,
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })

  describe('with DiamondBadge', () => {
    it('matches with snapshot', () => {
      window.matchMedia = createMockMediaMatcher(false)
      const component = renderer
        .create(
          <RewardCard>
            <RewardCard.Row>
              <RewardCard.RowContent>
                <RewardCard.DiamondBadge>
                  <Text size="nano" color="font1" weight="bold">
                    Starred label
                  </Text>
                  <Text size="nano" color="font1">
                    Lorem ipsum
                  </Text>
                </RewardCard.DiamondBadge>

                <RewardCard.Title>Custom title mount</RewardCard.Title>

                <Paragraph modifier="quaternary" margin={false}>
                  Custom text description
                </Paragraph>
              </RewardCard.RowContent>
            </RewardCard.Row>
          </RewardCard>,
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })

  describe('with legacy props', () => {
    it('matches with snapshot', () => {
      window.matchMedia = createMockMediaMatcher(false)

      // Desactivate warnings.
      jest.spyOn(global.console, 'error').mockImplementation(() => {})

      const component = renderer
        .create(
          <RewardCard
            titleAmount="Custom title amount"
            imageProps={{
              src: '#image',
              alt: 'Image alt',
            }}
            titleDescription="Custom title description"
            textDescription="Custom text description"
            titleContributors="Custom title contributors"
            titleDelivery="Custom title delivery"
            titleAvailability="Custom title availability"
            valueContributors="Custom value contributors"
            valueDelivery="Custom value delivery"
            valueAvailability="Custom value availability"
            button="Custom text button"
            myContribution="Custom my contribution"
            manageContribution="Custom manage contribution"
            manageContributionLink="Custom manage link contribution"
          />,
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
