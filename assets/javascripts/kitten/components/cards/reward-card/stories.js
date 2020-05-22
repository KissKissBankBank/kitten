import React from 'react'
import Radium from 'radium'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'
import { RewardCard } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Text as TextBase } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import { Button as ButtonBase } from '../../../components/buttons/button'
import { Paragraph as ParagraphBase } from '../../../components/typography/paragraph'
import COLORS from '../../../constants/colors-config'
import { List } from '../../../components/lists/list'
import { ExpandBoard } from '../../../components/expandable/expand-board'

const Button = Radium(ButtonBase)
const Paragraph = Radium(ParagraphBase)
const Text = Radium(TextBase)

storiesOf('Cards/RewardCard', module)
  .addDecorator(withKnobs)
  .add(
    'RewardCard',
    withInfo(
      'The RewardCard is a card with two versions depending on the parent container width. It can be composed with many sub-components.',
    )(() => {
      const versionGroupId = 'Versions'
      const contentGroupId = 'Content'

      const starred = boolean('Starred', true, versionGroupId)
      const diamond = boolean('Diamond', false, versionGroupId)
      const alreadyContributed = boolean(
        'Has user contributed?',
        true,
        versionGroupId,
      )
      const hasRewardLabel = boolean(
        'Does the reward have a label?',
        true,
        versionGroupId,
      )
      const withImage = boolean('With image', true, versionGroupId)
      const disabled = boolean('Disabled', false, versionGroupId)
      const completed = boolean('Completed', false, versionGroupId)
      const withOptions = boolean(
        'Does the reward have options?',
        false,
        versionGroupId,
      )
      const option2Disabled = boolean(
        'Reward option 2 disabled',
        true,
        versionGroupId,
      )

      return (
        <div style={styles.storyContainer}>
          <Grid>
            <GridCol offset="1" col="10">
              <RewardCard
                withoutBorder={boolean('withoutBorder', false, versionGroupId)}
                disabled={disabled}
              >
                <RewardCard.Row>
                  <RewardCard.RowContent>
                    {starred && (
                      <RewardCard.StarredBadge disabled={disabled}>
                        <Text
                          size="nano"
                          color="font1"
                          weight="bold"
                          style={[disabled && styles.disabled]}
                        >
                          {text(
                            'Starred label',
                            'Starred reward',
                            contentGroupId,
                          )}
                        </Text>
                        <Text
                          size="nano"
                          color="font1"
                          style={[disabled && styles.disabled]}
                        >
                          {text(
                            'Starred description',
                            'Lorem ipsum',
                            contentGroupId,
                          )}
                        </Text>
                      </RewardCard.StarredBadge>
                    )}
                    {diamond && (
                      <RewardCard.DiamondBadge disabled={disabled}>
                        <Text
                          size="nano"
                          color="font1"
                          weight="bold"
                          style={[disabled && styles.disabled]}
                        >
                          {text(
                            'Diamond label',
                            'Diamond reward',
                            contentGroupId,
                          )}
                        </Text>
                        <Text
                          size="nano"
                          color="font1"
                          style={[disabled && styles.disabled]}
                        >
                          {text(
                            'Diamond description',
                            'Lorem ipsum',
                            contentGroupId,
                          )}
                        </Text>
                      </RewardCard.DiamondBadge>
                    )}
                    <RewardCard.Title disabled={disabled}>
                      {text('Title', '100$', contentGroupId)}
                    </RewardCard.Title>
                    {hasRewardLabel && (
                      <Text
                        color="font1"
                        tag="p"
                        weight="bold"
                        style={[styles.label.base, disabled && styles.disabled]}
                      >
                        {text(
                          'Reward label',
                          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                          contentGroupId,
                        )}
                      </Text>
                    )}
                    <Paragraph
                      style={[styles.description, disabled && styles.disabled]}
                      modifier="quaternary"
                      margin={false}
                    >
                      {text(
                        'Reward description',
                        `Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro adnexa Isauria, pari sorte uberi palmite viget et frugibus minutis, quam mediam navigabile flumen Calycadnus interscindit.`,
                        contentGroupId,
                      )}
                    </Paragraph>
                    <List>
                      <RewardCard.Info
                        key="Contributors"
                        label={text(
                          'Info 1 label:',
                          'Contributors:',
                          contentGroupId,
                        )}
                        value={text('Info 1 value:', '35', contentGroupId)}
                        disabled={disabled}
                      />
                      <RewardCard.Info
                        key="Availability"
                        label={text(
                          'Info 2 label:',
                          'Availability:',
                          contentGroupId,
                        )}
                        value={text('Info 2 value:', '42/1000', contentGroupId)}
                        disabled={disabled}
                      />
                      <RewardCard.Info
                        key="Delivery"
                        label={text(
                          'Info 3 label:',
                          'Delivery:',
                          contentGroupId,
                        )}
                        value={text(
                          'Info 3 value:',
                          'January 2019',
                          contentGroupId,
                        )}
                        withMarginBottom={false}
                        disabled={disabled}
                      />
                    </List>
                  </RewardCard.RowContent>
                  {withImage && (
                    <RewardCard.RowSide>
                      <RewardCard.Image
                        src={text(
                          'Reward image src',
                          'http://via.placeholder.com/200x240/caf4fe/caf4fe',
                          contentGroupId,
                        )}
                        alt={text(
                          'Reward image alt',
                          'My reward',
                          contentGroupId,
                        )}
                        disabled={disabled}
                      />
                    </RewardCard.RowSide>
                  )}
                </RewardCard.Row>
                {!completed && (
                  <RewardCard.Row>
                    <RewardCard.RowContent>
                      {!withOptions && (
                        <Button
                          size="big"
                          modifier="helium"
                          type="button"
                          aria-labelledby={disabled ? 'Sold out' : 'Contribute'}
                          style={[styles.button]}
                          disabled={disabled}
                        >
                          {text(
                            'Button label',
                            disabled ? 'Sold out' : 'Contribute',
                            contentGroupId,
                          )}
                        </Button>
                      )}
                      {withOptions && (
                        <ExpandBoard disabled={disabled}>
                          <ExpandBoard.Button expandChildren="Précisez votre choix">
                            {text(
                              'Options button label',
                              disabled ? 'Sold out' : 'Contribute',
                              contentGroupId,
                            )}
                          </ExpandBoard.Button>
                          <ExpandBoard.Content>
                            <List>
                              <List.ButtonItem>
                                <div style={styles.buttonListItem.wrapper}>
                                  <Text
                                    tag="p"
                                    weight="regular"
                                    color="font1"
                                    size="tiny"
                                    style={styles.buttonListItem.base}
                                  >
                                    {text(
                                      'Option 1 label',
                                      'Taille S',
                                      contentGroupId,
                                    )}
                                  </Text>
                                  <Text tag="small" color="font1" size="micro">
                                    {text(
                                      'Option 1 description',
                                      'Disponibilité: 10/30',
                                      contentGroupId,
                                    )}
                                  </Text>
                                </div>
                              </List.ButtonItem>
                              <List.ButtonItem disabled={option2Disabled}>
                                <div style={styles.buttonListItem.wrapper}>
                                  <Text
                                    tag="p"
                                    weight="regular"
                                    color="font1"
                                    size="tiny"
                                    style={[
                                      styles.buttonListItem.base,
                                      option2Disabled && styles.disabled,
                                    ]}
                                  >
                                    {text(
                                      'Option 2 label',
                                      'Taille M',
                                      contentGroupId,
                                    )}
                                  </Text>
                                  <Text
                                    tag="small"
                                    color="font1"
                                    size="micro"
                                    style={[
                                      styles.buttonListItem.base,
                                      option2Disabled && styles.disabled,
                                    ]}
                                  >
                                    {text(
                                      'Option 2 description',
                                      'Disponibilité: 12/30',
                                      contentGroupId,
                                    )}
                                  </Text>
                                </div>
                              </List.ButtonItem>
                              <List.ButtonItem>
                                <div style={styles.buttonListItem.wrapper}>
                                  <Text
                                    tag="p"
                                    weight="regular"
                                    color="font1"
                                    size="tiny"
                                    style={styles.buttonListItem.base}
                                  >
                                    {text(
                                      'Option 3 label',
                                      'Taille XXL',
                                      contentGroupId,
                                    )}
                                  </Text>
                                  <Text tag="small" color="font1" size="micro">
                                    {text(
                                      'Option 4 description',
                                      'Disponibilité: 29/30',
                                      contentGroupId,
                                    )}
                                  </Text>
                                </div>
                              </List.ButtonItem>
                            </List>
                          </ExpandBoard.Content>
                        </ExpandBoard>
                      )}
                    </RewardCard.RowContent>
                    {withImage && (
                      <RewardCard.RowSide withVerticalMargins={false} />
                    )}
                  </RewardCard.Row>
                )}
                {alreadyContributed && (
                  <RewardCard.CheckedSection>
                    <Text
                      color="font1"
                      size="tiny"
                      tag="p"
                      style={styles.checkedSectionItems}
                    >
                      {text(
                        'Manage contribution description',
                        'You contributed to this project.',
                        contentGroupId,
                      )}
                    </Text>
                    <Text
                      decoration="none"
                      color="primary1"
                      size="tiny"
                      weight="regular"
                      tag="a"
                      href="#"
                      style={styles.checkedSectionItems}
                    >
                      {text(
                        'Manage contribution description',
                        'Manage my contribution',
                        contentGroupId,
                      )}
                    </Text>
                  </RewardCard.CheckedSection>
                )}
              </RewardCard>
            </GridCol>
          </Grid>
        </div>
      )
    }),
  )
  .add(
    'Legacy RewardCard',
    withInfo('common info')(() => (
      <div style={styles.storyContainer}>
        <Grid>
          <GridCol offset="1" col="10">
            <RewardCard
              titleAmount={text('Title amount', 'For 00€')}
              subtitle={text(
                'subtitle',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              )}
              description={text(
                'Text Description',
                'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.',
              )}
              infos={[
                object('Infos[0]', { label: 'Contributors:', value: '35' }),
                object('Infos[1]', {
                  label: 'Delivery:',
                  value: 'January 2018',
                }),
                object('Infos[2]', { label: 'Availability:', value: '200' }),
              ]}
              buttonLabel={text('Button label', 'Choose')}
              manageContributionDescription={text(
                'Manage contribution description',
                'You contributed to this project',
              )}
              manageContributionLinkLabel={text(
                'Manage contribution link label',
                'Manage my contribution',
              )}
              manageContributionLink={text(
                'Manage contribution link href',
                'https://www.google.com',
              )}
              isDisabled={boolean('Is Disabled', false)}
              starred={boolean('Is Starred', false)}
              starLabel={text('Label for featured reward', 'Featured reward')}
              imageProps={object('Src/Alt', {
                src: 'http://via.placeholder.com/200x240/caf4fe/caf4fe',
                alt: '',
              })}
            />
          </GridCol>
        </Grid>
      </div>
    )),
  )

const styles = {
  storyContainer: {
    margin: `${pxToRem(20)} 0`,
  },
  button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1.3rem',
    padding: `${pxToRem(22)} ${pxToRem(30)}`,
  },
  buttonContainer: {
    marginRight: pxToRem(30),
  },
  label: {
    margin: `0 0 ${pxToRem(15)} 0`,
  },
  description: {
    color: COLORS.font1,
    margin: `0 0 ${pxToRem(20)} 0`,
  },
  row: {
    emptySide: {
      margin: `0 ${pxToRem(15)}`,
    },
  },
  checkedSectionItems: {
    lineHeight: pxToRem(20),
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  disabled: {
    color: COLORS.font2,
    cursor: 'not-allowed',
  },
  expandBoard: {
    defaultContent: {
      padding: '1.5em',
      borderLeft: `${COLORS.line1} 0.125rem solid`,
      borderRight: `${COLORS.line1} 0.125rem solid`,
      borderBottom: `${COLORS.line1} 0.125rem solid`,
    },
  },
  buttonListItem: {
    base: {
      margin: 0,
      padding: 0,
      lineHeight: '1.2rem',
    },
    wrapper: {
      margin: '1rem 0',
      padding: 0,
    },
  },
}
