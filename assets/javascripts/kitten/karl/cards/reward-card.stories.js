import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs/react'
import { StyleRoot } from 'radium'
import { RewardCard } from 'kitten/components/cards/reward-card'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Text as TextBase } from 'kitten/components/typography/text'
import { pxToRem } from 'kitten/helpers/utils/typography'
import Radium from 'radium'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { Paragraph as ParagraphBase } from 'kitten/components/typography/paragraph'
import COLORS from 'kitten/constants/colors-config'
import { List } from 'kitten/components/lists/list'

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
      const alreadyContributed = boolean(
        'Has user contributed?',
        true,
        versionGroupId,
      )
      const hasRewardLabel = boolean('Has reward label?', true, versionGroupId)
      const withImage = boolean('With image', true, versionGroupId)
      const disabled = boolean('Disabled', false, versionGroupId)
      const completed = boolean('Completed', false, versionGroupId)

      return (
        <div style={styles.storyContainer}>
          <Grid>
            <GridCol offset="1" col="10">
              <RewardCard>
                <RewardCard.Row>
                  <RewardCard.RowContent>
                    {starred && (
                      <RewardCard.StarredBadge disabled={disabled}>
                        <Text size="nano" color="font1" weight="bold">
                          {text(
                            'Starred label',
                            'Starred reward',
                            contentGroupId,
                          )}
                        </Text>
                        <Text size="nano" color="font1">
                          {text(
                            'Starred description',
                            'Lorem ipsum',
                            contentGroupId,
                          )}
                        </Text>
                      </RewardCard.StarredBadge>
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
    filter: 'grayscale(1) opacity(.4)',
    cursor: 'not-allowed',
  },
}
