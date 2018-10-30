import React from 'react'
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
import { Text } from 'kitten/components/typography/text'
import { pxToRem } from 'kitten/helpers/utils/typography'
import Radium from 'radium'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { Paragraph as ParagraphBase } from 'kitten/components/typography/paragraph'
import COLORS from 'kitten/constants/colors-config'
import { List } from 'kitten/components/lists/list'

const Button = Radium(ButtonBase)
const Paragraph = Radium(ParagraphBase)

storiesOf('Cards/RewardCard', module)
  .addDecorator(withKnobs)
  .add(
    'Basic RewardCard',
    withInfo(
      'The RewardCard is a card with two versions depending on the parent container width. It can be composed with many sub-components.',
    )(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <RewardCard>
              <RewardCard.Row>
                <RewardCard.RowContent>
                  <RewardCard.Title>100$</RewardCard.Title>
                  <Marger top="3" bottom="1">
                    <Text color="font1" tag="p" weight="bold">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </Text>
                  </Marger>
                  <Marger top="1" bottom="2">
                    <Paragraph
                      style={styles.description}
                      modifier="quaternary"
                      margin={false}
                    >
                      Quaestione igitur per multiplices dilatata fortunas cum
                      ambigerentur quaedam, non nulla levius actitata constaret,
                      post multorum clades Apollinares ambo pater et filius in
                      exilium acti cum ad locum Crateras nomine pervenissent,
                      villam scilicet suam quae ab Antiochia vicensimo et quarto
                      disiungitur lapide, ut mandatum est, fractis cruribus
                      occiduntur.
                    </Paragraph>
                  </Marger>
                  <List>
                    <RewardCard.Info
                      key="Contributors"
                      label="Contributors:"
                      value="35"
                    />
                    <RewardCard.Info
                      key="Availability"
                      label="Availability:"
                      value="23/100"
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
              <RewardCard.Action>
                <Button
                  size="big"
                  modifier="helium"
                  type="button"
                  aria-labelledby="Contribute"
                  style={styles.button}
                >
                  Contribute
                </Button>
              </RewardCard.Action>
            </RewardCard>
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
  .add(
    'Already contributed RewardCard',
    withInfo(
      'This version of RewardCard adds a section to display if the user already took to a reward.',
    )(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <RewardCard>
              <RewardCard.Row>
                <RewardCard.RowContent>
                  <RewardCard.Title>100$</RewardCard.Title>
                  <Marger top="3" bottom="1">
                    <Text color="font1" tag="p" weight="bold">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </Text>
                  </Marger>
                  <Marger top="1" bottom="2">
                    <Paragraph
                      style={styles.description}
                      modifier="quaternary"
                      margin={false}
                    >
                      Quaestione igitur per multiplices dilatata fortunas cum
                      ambigerentur quaedam, non nulla levius actitata constaret,
                      post multorum clades Apollinares ambo pater et filius in
                      exilium acti cum ad locum Crateras nomine pervenissent,
                      villam scilicet suam quae ab Antiochia vicensimo et quarto
                      disiungitur lapide, ut mandatum est, fractis cruribus
                      occiduntur.
                    </Paragraph>
                  </Marger>
                  <List>
                    <RewardCard.Info
                      key="Contributors"
                      label="Contributors:"
                      value="35"
                    />
                    <RewardCard.Info
                      key="Availability"
                      label="Availability:"
                      value="23/100"
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
              <RewardCard.Action>
                <Button
                  size="big"
                  modifier="helium"
                  type="button"
                  aria-labelledby="Contribute"
                  style={styles.button}
                >
                  Contribute
                </Button>
              </RewardCard.Action>
              <RewardCard.CheckedIconLine />
              <RewardCard.Row style={styles.contributedSection.base}>
                <Text
                  color="font1"
                  size="tiny"
                  tag="p"
                  style={styles.contributedSection.items}
                >
                  You contributed to this project.
                </Text>
                <Text
                  color="primary1"
                  size="tiny"
                  weight="regular"
                  tag="a"
                  href="#"
                  style={styles.contributedSection.items}
                >
                  Manage my contribution
                </Text>
              </RewardCard.Row>
            </RewardCard>
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
  .add(
    'Disabled RewardCard',
    withInfo(
      'This a version of the disabled RewardCard. `RewardCard.Title`, `RewardCard.Info` and `RewardCard.Image accepts a `disabled` prop to easily implement this state.',
    )(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <RewardCard>
              <RewardCard.Row>
                <RewardCard.RowContent>
                  <RewardCard.Title disabled>100$</RewardCard.Title>
                  <Marger top="3" bottom="1">
                    <Text
                      color="font1"
                      tag="p"
                      weight="bold"
                      style={styles.disabled}
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </Text>
                  </Marger>
                  <Marger top="1" bottom="2">
                    <Paragraph
                      style={[styles.description, styles.disabled]}
                      modifier="quaternary"
                      margin={false}
                    >
                      Quaestione igitur per multiplices dilatata fortunas cum
                      ambigerentur quaedam, non nulla levius actitata constaret,
                      post multorum clades Apollinares ambo pater et filius in
                      exilium acti cum ad locum Crateras nomine pervenissent,
                      villam scilicet suam quae ab Antiochia vicensimo et quarto
                      disiungitur lapide, ut mandatum est, fractis cruribus
                      occiduntur.
                    </Paragraph>
                  </Marger>
                  <List>
                    <RewardCard.Info
                      key="Contributors"
                      label="Contributors:"
                      value="35"
                      disabled
                    />
                    <RewardCard.Info
                      key="Availability"
                      label="Availability:"
                      value="23/100"
                      disabled
                    />
                    <RewardCard.Info
                      key="Delivery"
                      label="Delivery:"
                      value="January 2019"
                      withMarginBottom={false}
                      disabled
                    />
                  </List>
                </RewardCard.RowContent>
                <RewardCard.RowSide>
                  <RewardCard.Image
                    src="http://via.placeholder.com/200x240/caf4fe/caf4fe"
                    alt="My reward"
                    disabled
                  />
                </RewardCard.RowSide>
              </RewardCard.Row>
              <RewardCard.Action>
                <Button
                  size="big"
                  modifier="helium"
                  type="button"
                  aria-labelledby="Sold out"
                  style={styles.button}
                  disabled
                >
                  Sold out
                </Button>
              </RewardCard.Action>
            </RewardCard>
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
  .add(
    'Legacy RewardCard',
    withInfo('common info')(() => (
      <StyleRoot>
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
      </StyleRoot>
    )),
  )

const styles = {
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
  description: {
    color: COLORS.font1,
  },
  disabled: {
    filter: 'grayscale(1) opacity(.4)',
    cursor: 'not-allowed',
  },
  contributedSection: {
    base: {
      marginTop: pxToRem(10),
      marginBottom: pxToRem(5),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    items: {
      lineHeight: pxToRem(20),
      display: 'flex',
      margin: 0,
      padding: 0,
    },
  },
}
